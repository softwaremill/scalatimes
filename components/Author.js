import React, {Component} from "react"
import Link from "next/link"

export default class Author extends Component {

    constructor(props) {
        super(props);
        this.twitterLink = this.twitterLink.bind(this);
        this.twitterHandle = this.twitterHandle.bind(this)
    }

    twitterLink() {
        return `https://twitter.com/${this.props.handle}`;
    }

    twitterHandle() {
        return `@${this.props.handle}`;
    }

    render() {
        return this.props.handle === '' ? <div className="link-author">~{this.props.author}</div> :
            <div className="link-author">
                ~{this.props.author}
                {" ("}
                <Link href={this.twitterLink()}>{this.twitterHandle()}</Link>
                {")"}
            </div>;
    }

}
