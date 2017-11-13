import React from 'react'
import Error from './_error'
import Layout from "../layouts/Layout"
import Issue from "../components/Issue"
import IssueLoading from "../components/IssueLoading"
import {withRouter} from 'next/router';
import Archive from '../components/Archive';
import ArchiveLoading from '../components/ArchiveLoading';
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
    try {
      return {issue: await api.fetchSingleIssue(issueNumber), issueNumber}
    } catch (e) {
      return {issueError: true, issueNumber}
    }
  }

  async loadData(forceIssueLoad) {
    const issueNumber = get(this.props.router, 'query.issue', 'latest');
    this.setState({issueNumber, archiveError: false});
    if(forceIssueLoad) {
      this.setState({issueError: false});
      try {
        this.setState({issue: await api.fetchSingleIssue(issueNumber)});
      } catch (e) {
        this.setState({issueError: true});
      }
    }
    try {
      this.setState({archive: await api.fetchArchives(0, 20)});      
    } catch (e) {
      this.setState({archiveError: true});
    }
  }

  async componentWillReceiveProps() {
    this.loadData(true);
  }

  async componentWillMount() {
    this.loadData(!this.props.issue);
  }

  render() {
    const combinedProps = {...this.props, ...this.state};
    return <Page {...combinedProps}/>
  }
  
}


const Errorable = ({content, loadingMsg, errorFlag, errorMsg, children}) => {
  return content ? children(content) : errorFlag ? <h4>{errorMsg}</h4> : <h4>{loadingMsg}</h4>
};

const Page = ({issue, archive, issueNumber, issueError, archiveError}) => {
  const loadingIssueText = issueNumber === 'latest' ? 'Loading latest issue' : `Loading issue #${issueNumber}`;
  return (
    <Layout>
      <div className="news-page">
        <div className="news-page__sidebar">
          {archive ? <Archive issues={archive.slice(0, 6)}/> : <ArchiveLoading/>}
        </div>
        <div className="news-page__issue">
          {issue ? <Issue issue={issue}/> : <IssueLoading/>}
        </div>
        <div className="news-page__sidebar">
          {archive ? <Archive issues={archive.slice(6, 12)}/> : <ArchiveLoading/>}
        </div>
      </div>
    </Layout>
  )
};

export default withRouter(PageDataLoader);