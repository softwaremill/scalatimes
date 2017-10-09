import * as React from "react"
import Link from "next/link"

export default (props) => {
    String.prototype.trunc = String.prototype.trunc ||
        function (n) {
            return (this.length > n) ? this.substr(0, n - 1).trim() + '...' : this;
        };

    return (
        <div className="archived-issue">
            <h3><Link href={{pathname: '/', query: {issue: props.number}}}><a>#{props.number}</a></Link></h3>
            <p>#{props.summary.trunc(180)}</p>
        </div>
    )
}