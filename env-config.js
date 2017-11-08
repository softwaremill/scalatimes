//https://softwaremill.us2.list-manage.com/subscribe/post?u=ba834c562d82d9aba5eaf90ba&id=1f2bfb9583'
const MC_URL_PREFIX = 'softwaremill.us2';
const MC_LIST_ID = '1f2bfb9583';
const MC_U = 'ba834c562d82d9aba5eaf90ba';

const config = {
  API_BASE_URL: 'http://scalatimes.tools.softwaremill.com:9096/api',
  MC_BASE_URL: `https://${MC_URL_PREFIX}.list-manage.com/subscribe/post-json?u=${MC_U}&id=${MC_LIST_ID}`
};

Object.assign(process.env, config);
module.exports = config;