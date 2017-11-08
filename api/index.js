import 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp';

export async function fetchSingleIssue(issueNum) {
  let res = await fetch(`${process.env.API_BASE_URL}/issue/${issueNum}`);
  if (res.ok) {
    let json = await res.json();
    return json.currentIssue;    
  }
  return null;
}

export async function fetchArchives(offset, limit) {
  let res = await fetch(`${process.env.API_BASE_URL}/issue/latest?archive=true`);
  if (res.ok) {
    let json = await res.json();
    return json.archivedIssues;
  }
  return null;
}

export async function subscribeToList(email) {
  const url = `${process.env.MC_BASE_URL}&EMAIL=${encodeURIComponent(email)}`;
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
