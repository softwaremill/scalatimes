import * as React from "react"
import Category from "./Category"

export default (props) => {
    return (
        <div className="issue-content">
            {props.categories.map((cat, idx) => <div key={cat.id}>
                <Category name={cat.name} links={cat.links}/>
                {(idx != (props.categories.length - 1)) &&  <hr style={{width: "65%", borderWidth: "3px", margin: "3rem auto"}}/>}
            </div>)}
        </div>
    )
}
