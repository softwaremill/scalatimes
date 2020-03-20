var mcapi = require('../node_modules/mailchimp-api/mailchimp');
var _ = require('underscore');
var moment = require('moment');
var cheerio = require('cheerio');
var fs = require('fs');
var axios = require('axios');
mc = new mcapi.Mailchimp(process.env.MAILCHIMP_API_KEY);

// Variable, that keeps all campaigns 
var campaignsCache = [];
var cachePath = process.env.CACHE_PATH;
if (!cachePath.endsWith("/")) cachePath += '/';
console.log("Disk cache path: " + cachePath);
var mcFetchLimit = process.env.MC_LIMIT || 10;
let CLOUD_SEARCH_URL = process.env.AWS_CS_QUERY_URL;
const PAGE_SIZE = 25;
getAllCampaignsForList(process.env.MAILCHIMP_LIST_ID);

// Update campaignsCache every 60 minutes
setInterval(function(){
  getAllCampaignsForList(process.env.MAILCHIMP_LIST_ID);
}, 1000*60*60);


function getAllCampaignsForList(listId) {
  mc.campaigns.list({filters: {'status':'sent', 'list_id':listId}, 'limit': mcFetchLimit}, function(data) {
    console.log("start generating campaignsCache...");
    var campaigns = data.data;
    getCampaignsContent(campaigns);
  }, function(error) {
    console.log(error);
    getCampaignsContent(readListFromDiskCache());
  });
}

function readListFromDiskCache() {
  var files = fs.readdirSync(cachePath);
  var campaigns = _.map(files, function(filename) {
    var id = filename.slice(0, -("html".length + 1));
    return {
      id: id
    }
  });
  return campaigns;
}

function fetchCampaignHtml(id, callback) {
  var path = diskCachePathForKey(id);
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.log("Fetching campaign " + id + " from Mailchimp API");
      mc.campaigns.content({cid:id}, function(contentData) {
        var htmlContent = contentData.html;
        cacheHtmlToDisk(id, htmlContent);
        callback(htmlContent);
      });
    }
    else {
      console.log("Loading campaign " + id + " from disk cache");
      callback(data);
    }
  });
}

// Get object for every campaign: title, id, html, excerpt(for archive page), index
function getCampaignsContent(campaigns) {
  var campaignsArray = [];

  for (var i = 0; i < campaigns.length; i++) {
    
    var num = 0;
    
    (function (i) {
      var campaignId = campaigns[i].id;

      fetchCampaignHtml(campaignId, function(htmlContent) {
        num++;
        var excerpt = getCampaignExcerpts(htmlContent);
        var campaignBody = getCampaignBody(htmlContent);
        var issueInfo = getIssueInfo(htmlContent);
        var campaignTitle = getCampaignTitle(htmlContent);
        var campaignDate = getCampaignDate(issueInfo);
        var campaignIndex = getCampaignIndex(issueInfo, i);
        campaignsArray.push({
          'title': campaignTitle,
          'id': campaignId,
          'html': htmlContent,
          'excerpt': excerpt,
          'campaignBody': campaignBody,
          'issueInfo': issueInfo,
          'date': campaignDate,
          'index': campaignIndex
        });

        // check if all requests were finished => array is complete
        if (num == campaigns.length) {

          campaignsCache = _.sortBy(campaignsArray, "date").reverse();
          // send to console, that variable is ready and timestamp
          console.log ("campaignsCache is ready");
          var date = new Date();
          console.log(date);

        }

      });

    })(i);

  }
}

function getCampaignTitle(htmlContent) {
  var $ = cheerio.load(htmlContent);
  return $('meta[property="og:title"]').attr("content");
}

function getCampaignDate(issueInfo) {
  var dateStr = issueInfo.substr(0, issueInfo.lastIndexOf(','));
  return moment(dateStr, "MMMM Do, YYYY").format();
}

function getCampaignIndex(issueInfo, i) {
  var campaignIndexStr = issueInfo.substr(issueInfo.lastIndexOf(" "), issueInfo.length);
  var campaignIndex = i;
  if (!_.isNull(campaignIndexStr) && !_.isUndefined(campaignIndexStr))
    campaignIndex = parseInt(campaignIndexStr);
  return campaignIndex;
}

function cacheHtmlToDisk(key, html) {
  var path = diskCachePathForKey(key);
  fs.writeFile(path, html, {encoding: 'utf8'}, function(err) {
    if(err) {
      return console.log(err);
    }
    else {
      console.log("Cached local file " + path);
    }
  });
}

function diskCachePathForKey(key) {
  return cachePath + key + '.html';
}

function getCampaignExcerpts (htmlContent) {
  var $ = cheerio.load(htmlContent);
  var goodContentArray = [];

  $('.article-content a').each(function(index, element) {

    // If it's mailto link - skip
    if($(element).attr('href').indexOf('mailto:') !== 0) {
      
      // If it's twitter link - skip
      if($(element).attr('href').indexOf('https://twitter.com') !== 0) {

        var textContent = $(element).text(); 

        // Link should be longer than 2 words and less than 12 words
        if (textContent.split(' ').length > 2 && textContent.split(' ').length < 12) {

          // Check if first words starts with Capital letter
          if (textContent[0] === textContent[0].toUpperCase()) {
            goodContentArray.push(textContent);
          }           
        }
      }
    }
  });
  // Use only first 5 titles
  goodContentArray = _.first(goodContentArray, 5);

  var html = "";
  _.each(goodContentArray, function(element){
    html = html + element + ". ";
  });

  return html;
}

function getCampaignBody (htmlContent) {
  var $ = cheerio.load(htmlContent);
  var campaignBody = $('#bodyContent #bodyTable td[align="left"]');

  return campaignBody;
}

function getIssueInfo (htmlContent) {
  var $ = cheerio.load(htmlContent);
  var issueInfo = $('#issueSection').text().trim().split('This issue on')[0].trim().slice(0,-1);

  return issueInfo;
}


/*
 * Render content of given camplaign (/archive/:campaignId page).
 */
exports.view = function(req, res){
  var contentData = _.findWhere(campaignsCache, {'id': req.params.campaignId});
  res.render('archive/index', {campaigns: campaignsCache, issue: contentData});
};

/*
 * Render latest issue on index page.
 */
exports.view_latest = function(req, res){
  var contentData = campaignsCache[0];
  res.render('index', {campaigns: campaignsCache, issue: contentData});
};

exports.search = function (req, res) {
  let searchResult = {success: false, message: "No results..."};

  if (req.query.query) {
    let offset = (1 * req.query.offset) || 0;

    axios.get(CLOUD_SEARCH_URL, {
      params: {
        "q": req.query.query,
        "size": 25,
        "start": offset,
        "return": "_all_fields",
        "sort": "custom_score desc"
      }
    }).then(r => {
      if (r.data.hits && r.data.hits.found) {
        searchResult.success = true;
        searchResult.results = r.data.hits.hit;
        if (offset !== 0) {
          searchResult.previousUrl = buildSearchUrl(req.query.query, offset - PAGE_SIZE);
        }
        if (offset + PAGE_SIZE < r.data.hits.found) {
          searchResult.nextUrl = buildSearchUrl(req.query.query, offset + PAGE_SIZE);
        }
      }
      res.render('archive/search', {campaigns: campaignsCache, searchResult: searchResult});

    }).catch(function (error) {
      console.error(error);
      res.render('index', {campaigns: campaignsCache, issue: campaignsCache[0]});
    });
  } else {
    res.render('archive/search', {campaigns: campaignsCache, searchResult: searchResult});
  }

  function buildSearchUrl(queryString, offset) {
    return "/search".concat("?query=", encodeURIComponent(queryString), "&offset=", offset);
  }

};
