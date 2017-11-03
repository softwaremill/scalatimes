import React from 'react'
import get from 'lodash/get'
import 'isomorphic-fetch'
import Error from './_error'
import Page from "../layouts/content"
import Issue from "../components/Issue"
import {issueUrl} from "../components/url"

export default class MyPage extends React.Component {
    static async getInitialProps(ctx) {
            let number = get(ctx, 'query.issue', "latest");
        let res = await fetch(issueUrl + number + '?archive=true');
        if (res.ok) {
            let json = await res.json();
            return {status: res.status, currentIssue: json.currentIssue, archive: json.archivedIssues}
        } else {
            return {status: res.status}
        }
    }

    render() {
        if (this.props.status !== 200) {
            return <Error statusCode={this.props.statusCode}/>
        }

        return (
            <Page archive={this.props.archive}>
                <Issue key={this.props.currentIssue.id} number={this.props.currentIssue.number}
                       date={this.props.currentIssue.date} categories={this.props.currentIssue.categories}/>
            </Page>
        )
    }
}