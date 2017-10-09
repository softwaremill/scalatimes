import React from 'react'
import get from 'lodash/get'
import 'isomorphic-fetch'
import Page from "../layouts/content"
import Issue from "../components/Issue"
import {issueUrl} from "../components/url"

export default class MyPage extends React.Component {
    static async getInitialProps(ctx) {
        let number = get(ctx, 'query.issue', "latest");
        const res = await fetch(issueUrl + number + '?archive=true');
        const json = await res.json();
        return {currentIssue: json.currentIssue, archive: json.archivedIssues}
    }

    render() {
        return (
            <Page archive={this.props.archive}>
                <Issue key={this.props.currentIssue.id} number={this.props.currentIssue.number}
                       date={this.props.currentIssue.date} categories={this.props.currentIssue.categories}/>
            </Page>
        )
    }
}