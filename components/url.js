function baseUrl() {
    if (process.env.NODE_ENV !== "production") {
        return "http://scalatimes.tools.softwaremill.com:9096";
    } else {
        return "http://scalatimes.tools.softwaremill.com:9096";
    }
}

const url = baseUrl();

export const issueUrl = `${url}/api/issue/`;
export const latestIssueUrl = `${url}/api/issue/latest`;
