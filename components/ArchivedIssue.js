import * as React from "react"
import Link from "next/link"

const truncate = (n, str) =>  (str.length > n) ? str.substr(0, n - 1).trim() + '...' : str;

export default (props) => {
  return (
    <div className="archived-issue">
      <h3><Link href={{ pathname: '/', query: { issue: props.number } }}><a>#{props.number}</a></Link></h3>
      <p>#{truncate(180, props.summary)}</p>
    </div>
  )
}