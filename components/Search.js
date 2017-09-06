import React, {Component} from 'react';

export default class Search extends Component {

    handleSearch = (evt) => {
        if (evt.key === "Enter") {
            // TODO check is it a valid email
            // TODO call http to store subscriber's email
            this.email.value = ""
        }
    };

    render() {
        return (
            <div className="search">
                <div className="col-md-10 col-sm-12 mx-auto">
                    <div className="has-feedback sm-w-100 xs-w-75">
                        <input type="text" className="py-xs-1" placeholder="Search" />
                        <span className="glyphicon glyphicon-search form-control-feedback search-icon"></span>
                    </div>
                </div>
            </div>
        )
    }

}
