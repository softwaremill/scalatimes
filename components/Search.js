import React, {Component} from 'react';

export default class Search extends Component {

    handleSearch = (evt) => {
        if (evt.key === "Enter") {
            // TODO call aws for results ???
            this.phrase.value = ""
        }
    };

    render() {
        return (
            <div className="container">
                <div className="search">
                    <div className="col-md-10 col-sm-12 mx-auto">
                        <div className="has-feedback sm-w-100 xs-w-75">
                            <input type="text" className="py-xs-1" placeholder="Search"
                                   ref={(input) => {this.phrase = input;}}
                                   onKeyPress={this.handleSearch}/>
                            <span className="glyphicon glyphicon-search form-control-feedback search-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
