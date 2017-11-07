import React, { Component } from "react"

const renderTwitterHandle = (handle) => {
  return <span>(<a href={`https://twitter.com/${handle}`}>@{handle}</a>)</span>
};

export default ({ author, twitterHandle }) => {
  return (
    <p className="issue-entry__author">
      ~{author} {twitterHandle && renderTwitterHandle(twitterHandle)}
    </p>
  );
};