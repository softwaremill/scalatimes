import React from "react"
import Layout from "../layouts/Layout"

export default class Error extends React.Component {
    static getInitialProps({res, jsonPageRes}) {
        const statusCode = res
            ? res.statusCode
            : jsonPageRes ? jsonPageRes.status : null
        return {statusCode}
    }

    render() {
        return (
            <Layout>
                <div className="error">
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </div>
            </Layout>
        )
    }
}