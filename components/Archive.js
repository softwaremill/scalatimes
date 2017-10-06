import * as React from "react"
import ArchivedIssue from "../components/ArchivedIssue"

export default (props) => {
    return (
        <div className="previous text-center">
            <header>Previous</header>
            <div>
                {props.issues.map((arc) => <ArchivedIssue key={arc.issueNumber} number={arc.issueNumber}
                                                          summary={arc.concatenatedTitles}/>)}
            </div>
        </div>
    )
}
