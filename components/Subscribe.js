import React, {Component} from 'react';

export default class Subscribe extends Component {

    handleNewSubscriber = (evt) => {
        if (evt.key === "Enter") {
            // TODO check is it a valid email
            // TODO call http to store subscriber's email
            this.email.value = ""
        }
    };

    render() {
        return (
            <div className="row">
                <div className="mt-4 mx-auto col-md-6">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <input type="text" placeholder="E-mail address"
                                   className="subscribe-input"
                                   ref={(input) => {this.email = input;}}
                                   onKeyPress={this.handleNewSubscriber}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

Subscribe.propTypes = {
    // http: React.PropTypes.object.isRequired
};
