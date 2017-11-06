import React from "react"
import IssueEntry from "./IssueEntry"

export default (props) => {
  return (
    <div className="issue-entries-group">
      <h2 id={props.name}>{props.name.toUpperCase()}</h2>
      {props.links.map(issue => <IssueEntry issue={issue}/>)}
    </div>
  )
}