import React from "react"
import Author from "./Author"

export default ({ issue }) => {
  const { url, title, description, author, twitterHandle } = issue;
  return (
    <div className="issue-entry">
      <h4 className="issue-entry__title"><a href={url} target="_blank">{title}</a></h4>
      <p className="issue-entry__desc">{description}</p>
      {author && <Author author={author} twitterHandle={twitterHandle} />}
    </div>
  )
}