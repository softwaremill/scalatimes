import 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp';

const API_BASE_URL = 'http://scalatimes.tools.softwaremill.com:9096/api';
const ISSUE_URL = `${API_BASE_URL}/issue`

//https://softwaremill.us2.list-manage.com/subscribe/post?u=ba834c562d82d9aba5eaf90ba&id=1f2bfb9583'
const MC_URL_PREFIX = 'softwaremill.us2';
const MC_LIST_ID = '1f2bfb9583';
const MC_U = 'ba834c562d82d9aba5eaf90ba';
const MC_BASE_URL = `//${MC_URL_PREFIX}.list-manage.com/subscribe/post-json?u=${MC_U}&id=${MC_LIST_ID}`;

export async function fetchSingleIssue(issueNum) {
  let res = await fetch(`${ISSUE_URL}/${issueNum}`);
  if (res.ok) {
    let json = await res.json();
    return json.currentIssue;    
  }
  return null;
}

export async function fetchArchives(offset, limit) {
  let res = await fetch(`${ISSUE_URL}/latest?archive=true`);
  if (res.ok) {
    let json = await res.json();
    return json.archivedIssues;
  }
  return null;
}

export async function subscribeToList(email) {
  const url = `${MC_BASE_URL}&EMAIL=${encodeURIComponent(email)}`;
  const resp = await fetchJsonp(url, {jsonpCallback: "c"});
  if(resp.ok) {
    const json = await resp.json();
    if(json.result === 'error' && json.msg.includes('is already subscribed to list')) {
      return 'already_subscribed';
    }
    return json.result;
  }
  return 'error';
}
