import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            <div className="subscribe container mt-5">
                <div className="row mx-auto form-group">
                    <div className="col-sm-6 col-sm-offset-1 col-xs-12 sm-text-right xs-text-center mb-xs-2">
                        <input type="email" placeholder="E-mail address"
                               className="py-1 px-3 sm-w-100 xs-w-75"
                               ref={(input) => {this.email = input;}}
                               onKeyPress={this.handleNewSubscriber}
                        />
                    </div>
                    <div className="col-sm-4 col-xs-12 mt-xs-2 sm-text-left xs-text-center">
                        <button className="sm-w-100 xs-w-75">Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }

}

Subscribe.propTypes = {
    http: PropTypes.object //.isRequired
};
