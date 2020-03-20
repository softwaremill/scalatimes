Newsletters Archive via Mailchimp API
===================

You can see example on [Scala Times](http://www.scalatimes.com/) - Weekly Scala Newspaper.


## Overview

This app is built on the top of [MailChimp API v2.0 NodeJs Example Application](https://github.com/mailchimp/mcapi2-node-examples).

### Analytics

Here is [the link](https://analytics.google.com/analytics/web/#report/defaultid/a11235106w117557468p123015903/) where you can check GA for the site.

### TeamCity CI

Continuous Integration for the site is [here](https://teamcity.internal.sml.io/project.html?projectId=ScalatimesCom&tab=projectOverview).

## Running project for the first time

### NodeJS

Install [Node.js](http://nodejs.org/) or check, if you have it installed.
To check, if it's installed, run command `node -v` in console. 
If you see version - than you have it installed. 

If not - go to [http://nodejs.org/](nodejs.org) and install it from there.


### Install dependencies

In console navigate to project's folder and run 

```
  npm install
```

This will install all required dependencies for this project (Express, Pug, Mailchimp API, Cheerio, Underscore).


### Run app

Navigate to `routes/archive.js` file and update Mailchimp API key and List ID.
You need a Mailchimp API key and List ID. If you have a user account connected to the SoftwareMill account, use following
instructions to retrieve this data:  
[Here](http://kb.mailchimp.com/accounts/management/about-api-keys) you can find information on how to find your Mailchimp API key.
[Here](http://kb.mailchimp.com/lists/managing-subscribers/find-your-list-id) you can find information on how to find List ID.

After that run

```
  CACHE_PATH=/tmp MAILCHIMP_API_KEY={YOUR_API_KEY} MAILCHIMP_LIST_ID={YOUR_LIST_ID} AWS_CS_QUERY_URL={AWS_CS_URL}  node app.js
```

or for Windows run like this

```
  $env:CACHE_PATH="{some path}"
  $env:MAILCHIMP_API_KEY="{key}"
  $env:MAILCHIMP_LIST_ID="{list_id}"
  $env:AWS_CS_QUERY_URL="{aws_cloud_serach_url}"

  node app.js
```

Wait couple of seconds, while you see

```
  campaignsCache is ready
```
in console.

Novigate to `http://localhost:3000/` in your browser.

You should have the latest issue on index page, and archive (last 100 issues) on `http://localhost:3000/archive` page. 

### Live deployment
The production deployment exposed on https://scalatimes.com is automatically deployed from the `master` branch.

### Disk cache

The app tries to load campaigns from local cache directory specified by `CACHE_PATH`. This directory can be purged to force reload from MailChimp API.

### Fix archive page

To make your archive page properly show excerpts of every newsletter, you need to update function `getCampaignExcerpts()` in `routes/archive.js`.
This function gets HTML of every campaign and finds important information in that HTML.
