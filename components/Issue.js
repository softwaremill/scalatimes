import React from "react"
import Moment from 'react-moment'
import IssueToC from "./IssueToC"
import IssueContent from "./IssueContent"

export default (props) => {
  return (
    <div>
      <div className="issue__header">
        <h2>#{props.number}</h2>
        <h4>
          <Moment format='MMMM Do, YYYY' date={props.date} />
        </h4>
        <IssueToC names={props.categories.map((cat) => cat.name)} />
      </div>
      <IssueContent categories={props.categories} />
    </div>
  )
}