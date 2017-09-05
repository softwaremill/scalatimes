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
                <div className="row mx-auto form-group">
                    <div className="col-md-6 col-md-offset-1 col-sx-12 text-right">
                        <input type="email" placeholder="E-mail address"
                               className="py-md-1 px-3 w-100 has-feedback"
                               ref={(input) => {this.email = input;}}
                               onKeyPress={this.handleNewSubscriber}
                        />
                    </div>
                    <div className="col-md-4 col-sx-12 text-left">
                        <button className="w-100">Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }

}

Subscribe.propTypes = {
    // http: React.PropTypes.object.isRequired
};
