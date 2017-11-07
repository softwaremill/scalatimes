import 'isomorphic-fetch'

const API_BASE_URL = 'http://scalatimes.tools.softwaremill.com:9096/api';
const ISSUE_URL = `${API_BASE_URL}/issue`

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