import * as React from "react"
import ArchivedIssue from "../components/ArchivedIssue"
import {buildCollection} from "./IssueLoading";

const archiveItemTemplate = i => ({
  number: `No. ${i}`,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus velit tincidunt viverra mollis. Maecenas venenatis tortor et nulla fermentum faucibus. Integer rutrum volutpat justo, vitae elementum dolor aliquam quis. Proin quis ipsum nisi. Donec iaculis sodales dolor. Integer pulvinar viverra mauris, id vulputate elit posuere eget. Mauris vitae nulla a massa vestibulum luctus.'
});

const fakeArchives = buildCollection(archiveItemTemplate)(6);

export default () => {
  return (
    <div className="sidebar-archive sidebar-archive--loading loading-animation">
      {fakeArchives.map(arc => <ArchivedIssue key={arc.number} number={arc.number} summary={arc.content} />)}
    </div>
  )
}
