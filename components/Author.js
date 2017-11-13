import React, { Component } from "react"

const renderTwitterHandle = (handle) => {
  return <span>(<a href={`https://twitter.com/${handle}`}>@{handle}</a>)</span>
};

export default ({ author, twitterHandle }) => {
  return (
    <p className="issue-entry__author">
      <span>~{author} {twitterHandle && renderTwitterHandle(twitterHandle)}</span>
    </p>
  );
};