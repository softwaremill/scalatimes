import React from 'react'
import Page from "../layouts/content"
import Issue from "../components/Issue"
import {issueUrl} from "../components/url"
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
    static async getInitialProps() {
        const res = await fetch(issueUrl + 'latest?archive=true');
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