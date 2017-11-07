import React from "react"
import format from 'date-fns/format';
import IssueToC from "./IssueToC"
import IssueContent from "./IssueContent"

export default (props) => {
  const formatedDate = format(props.date, 'MMMM Do, YYYY');
  return (
    <div>
      <div className="issue__header">
        <h2>#{props.number}</h2>
        <h4>
          {formatedDate}
        </h4>
        <IssueToC names={props.categories.map((cat) => cat.name)} />
      </div>
      <IssueContent categories={props.categories} />
    </div>
  )
}