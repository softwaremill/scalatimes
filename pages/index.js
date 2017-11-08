import React from 'react'
import Error from './_error'
import Layout from "../layouts/Layout"
import Issue from "../components/Issue"
import {withRouter} from 'next/router';
import Archive from '../components/Archive';
import * as api from '../api';
import get from 'lodash/get';

class PageDataLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps(ctx) {
    const isClient = typeof window !== 'undefined';
    if(isClient) return {};
    const issueNumber = get(ctx, 'query.issue', 'latest');
    const issue = await api.fetchSingleIssue(issueNumber);
    return {issue, issueNumber, __ssr: true};
  }

  async componentWillReceiveProps() {
    const issueNumber = get(this.props.router, 'query.issue', 'latest');
    this.setState({issueNumber});
    const issue = await api.fetchSingleIssue(issueNumber);      
    this.setState({issue});
    const archive = await api.fetchArchives(0, 20);
    this.setState({archive});
  }

  async componentWillMount() {
    const issueNumber = get(this.props.router, 'query.issue', 'latest');
    this.setState({issueNumber});
    if(!this.props.__ssr) {
      const issue = await api.fetchSingleIssue(issueNumber);      
      this.setState({issue});
    }
    const archive = await api.fetchArchives(0, 20);
    this.setState({archive});
  }

  render() {
    const combinedProps = {...this.props, ...this.state};
    return <Page {...combinedProps}/>
  }
  
}

const Page = ({issue, archive, issueNumber}) => {
  const loadingIssueText = issueNumber === 'latest' ? 'Loading latest issue' : `Loading issue #${issueNumber}`;
  return (
    <Layout>
      <div className="news-page">
        <div className="news-page__sidebar">
          {archive ? <Archive issues={archive.slice(0, 6)}/> : <h4>Loading issues archive</h4>}
        </div>
        <div className="news-page__issue">
          {issue ? <Issue number={issue.number} date={issue.date} categories={issue.categories}/> : <h3>{loadingIssueText}</h3>}
        </div>
        <div className="news-page__sidebar">
          {archive ? <Archive issues={archive.slice(6)}/> : <h4>Loading issues archive</h4>}
        </div>
      </div>
    </Layout>
  )
};

export default withRouter(PageDataLoader);