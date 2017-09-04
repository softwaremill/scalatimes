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
                <div className="row mx-auto justify-content-center flex-nowrap">
                    <div className="col-md-6 mx-md-3 col-sm-12 sy-1">
                        <input type="text" placeholder="E-mail address"
                               className="px-md-3 py-md-1"
                               ref={(input) => {this.email = input;}}
                               onKeyPress={this.handleNewSubscriber}
                        />
                    </div>
                    <div className="col-md-3 mx-md-2 col-sm-12 sy-1">
                        <button className="px-md-5 py-md-1 w-100">Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }

}

Subscribe.propTypes = {
    // http: React.PropTypes.object.isRequired
};
