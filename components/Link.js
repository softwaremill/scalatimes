import * as React from "react"
import Author from "./Author"

export default (props) => {
    return (
        <div className="link">
            <div><a href={props.url}><span className="link-title">{props.title}</span></a></div>
            <div className="link-desc">{props.description}</div>
            {props.author && <Author author={props.author} handle={props.handle}/>}
        </div>
    )
}