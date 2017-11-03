import * as React from "react"
import NavBar from "./NavBar"
import Title from "./Title"
import Subscribe from "./Subscribe"

export default () => {
  return (
    <header>
      <img src="/static/img/st_250px.png"/>
      <p>
        A free, once-weekly Scala news flash. Easy to unsubscribe.
        <br/>
        Goes out every Thursday.
      </p>
    </header>
  )
};