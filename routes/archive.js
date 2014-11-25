var mcapi = require('../node_modules/mailchimp-api/mailchimp');
var _ = require('underscore');
var cheerio = require('cheerio');
mc = new mcapi.Mailchimp(process.env.MAILCHIMP_API_KEY);

// Variable, that keeps all campaigns 
var campaignsCache = [];

getAllCampaignsForList(process.env.MAILCHIMP_LIST_ID);

// Update campaignsCache every 60 minutes
setInterval(function(){
  getAllCampaignsForList(process.env.MAILCHIMP_LIST_ID);
}, 1000*60*60);


function getAllCampaignsForList(listId) {
  mc.campaigns.list({filters: {'status':'sent', 'list_id':listId}, 'limit': 100}, function(data) {
    var campaigns = data.data;
    getCampaignsContent(campaigns);
  })
}

// Get object for every campaign: title, id, html, excerpt(for archive page), index
function getCampaignsContent(campaigns) {
  var campaignsArray = [];

  for (var i = 0; i < campaigns.length; i++) {
    
    var num = 0;
    
    (function (i) {
      var campaignId = campaigns[i].id;
      var campaignTitle = campaigns[i].title;

      mc.campaigns.content({cid:campaignId}, function(contentData) {
        num++;
        var htmlContent = contentData.html;

        var excerpt = getCampaignExcerpts(htmlContent);
     
        campaignsArray.push({
          'title': campaignTitle,
          'id': campaignId,
          'html': htmlContent,
          'excerpt': excerpt,
          'index': i
        });

        // check if all requests were finished => array is complete
        if (num == campaigns.length) {

          campaignsCache = _.sortBy(campaignsArray, "index");
          // send to console, that variable is ready and timestamp
          console.log ("campaignsCache is ready");
          var date = new Date();
          console.log(date);

        }
        
      });

    })(i);

  }
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

  var html = "<ul>";
  _.each(goodContentArray, function(element){
    html = html + "<li>" + element + "</li>";
  });
  html = html + "</ul>";

  return html;
}



/*
 * Render list of sent campaigns (archive page).
 */
exports.list = function(req, res){
  res.render('archive/index', { title: 'Archive', campaigns: campaignsCache}); 
};

/*
 * Render content of given camplaign (/archive/:campaignId page).
 */
exports.view = function(req, res){
  var contentData = _.findWhere(campaignsCache, {'id': req.params.campaignId});
  res.render('archive/view', contentData);
};

/*
 * Render latest issue on index page.
 */
exports.view_latest = function(req, res){
  var contentData = campaignsCache[0];
  res.render('index', contentData);
};