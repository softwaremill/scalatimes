import * as React from "react"
import Link from "next/link"

const truncate = (n, str) =>  (str.length > n) ? str.substr(0, n - 1).trim() + '...' : str;

export default (props) => {
  return (
    <div className="sidebar-archive__item">
      <h3 className="archive-item__title">
        <Link href={{ pathname: '/', query: { issue: props.number } }}><a><span>#{props.number}</span></a></Link>
      </h3>
      <p className="archive-item__summary"><span>{truncate(180, props.summary)}</span></p>
    </div>
  )
}