import React from "react"
import IssueEntriesGroup from "./IssueEntriesGroup"

export default (props) => {
  return (
    <div className="issue__content">
      {props.categories.map(cat => <IssueEntriesGroup key={cat.name} name={cat.name} links={cat.links} />)}
    </div>
  )
}
