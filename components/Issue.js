import React from "react"
import format from 'date-fns/format';
import IssueToC from "./IssueToC"
import IssueContent from "./IssueContent"
import range from 'lodash/range';

export default ({issue}) => {
  const {date, number, categories} = issue;
  const formatedDate = format(date, 'MMMM Do, YYYY');
  return (
    <div className="issue">
      <div className="issue__header">
        <h2><span>#{number}</span></h2>
        <h4>
          <span>{formatedDate}</span>
        </h4>
        <IssueToC names={categories.map((cat) => cat.name)} />
      </div>
      <IssueContent categories={categories} />
    </div>
  )
};
