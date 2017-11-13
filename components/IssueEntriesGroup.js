import React from "react"
import IssueEntry from "./IssueEntry"

export default (props) => {
  return (
    <div className="issue-entries-group">
      <h2 className="issue-entries-group__title" id={props.name}><span>{props.name.toUpperCase()}</span></h2>
      {props.links.map(link => <IssueEntry key={link.url} issue={link}/>)}
    </div>
  )
}