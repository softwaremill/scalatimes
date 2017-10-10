import * as React from "react"
import Page from "../layouts/main"

export default class Error extends React.Component {
    static getInitialProps({res, jsonPageRes}) {
        const statusCode = res
            ? res.statusCode
            : jsonPageRes ? jsonPageRes.status : null
        return {statusCode}
    }

    render() {
        return (
            <Page>
                <div className="error">
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </div>
            </Page>
        )
    }
}