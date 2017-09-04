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
            <div className="subscribe container mt-5">
                <div className="row mx-auto justify-content-center">
                    <input type="text" placeholder="E-mail address"
                           className="px-md-3 py-md-1 mx-3 col-md-7 col-sm-12"
                           ref={(input) => {this.email = input;}}
                           onKeyPress={this.handleNewSubscriber}
                    />
                    <button className="px-md-5 py-md-1 mx-3 col-md-4 col-sm-12">Subscribe</button>
                </div>
            </div>
        )
    }

}

Subscribe.propTypes = {
    // http: React.PropTypes.object.isRequired
};
