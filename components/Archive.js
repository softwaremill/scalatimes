import * as React from "react"
import Link from 'next/link';
import ArchivedIssue from "../components/ArchivedIssue"

export default (props) => {
  return (
    <div className="sidebar-archive">
      {props.issues.map(arc => <ArchivedIssue key={arc.issueNumber} number={arc.issueNumber} summary={arc.concatenatedTitles} />)}
      <h4><Link href="archives"><a><i className="fa fa-bars"/> All issues</a></Link></h4>
    </div>
  )
}
