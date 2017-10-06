import React, {Component} from 'react'

export default class Subscribe extends Component {

    render() {
        return (
            <div className="subscribe container mt-5">
                <div className="row mx-auto form-group">
                    <form id="mc-embedded-subscribe-form"
                          action="http://scalatimes.us2.list-manage.com/subscribe/post?u=ba834c562d82d9aba5eaf90ba&amp;id=32cef9ab4e"
                          method="post" name="mc-embedded-subscribe-form" className="validate">
                        <div className="col-sm-6 col-sm-offset-1 col-xs-12 sm-text-right xs-text-center mb-xs-2">
                            <label htmlFor="mce-EMAIL" className="sr-only">E-mail address</label>
                            <input type="email" id="mce-EMAIL" placeholder="E-mail address"
                                   ref={(input) => {this.email = input;}}
                                   className="required email" required="required" name="EMAIL"
                            />
                        </div>
                        <div className="col-sm-4 col-xs-12 mt-xs-2 sm-text-left xs-text-center">
                            <button type="submit" id="mc-embedded-subscribe" className="w-100">Subscribe</button>
                        </div>
                        <div id="mce-responses" className="col-xs-10 col-xs-offset-1 mt-4">
                            <div id="mce-error-response" className="response" style={{display: "none"}}/>
                            <div id="mce-success-response" className="response" style={{display: "none"}}/>
                        </div>
                        <div style={{position: "absolute", marginLeft: "-5000px"}}>
                            <input type="text" name="b_ba834c562d82d9aba5eaf90ba_32cef9ab4e" tabIndex={-1} value=""/>
                        </div>
                        <script type="text/javascript" src="http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
                        <script type="text/javascript" src="/static/js/email_frame.js"/>
                    </form>
                </div>
            </div>
        )
    }

}
