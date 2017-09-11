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
            <div className="search">
                    <div className="col-xs-12 col-sm-10 has-feedback xs-w-75 mx-auto search-max-width">
                        <input type="text" className="py-1 px-3" placeholder="Search"
                               ref={(input) => {this.phrase = input;}}
                               onKeyPress={this.handleSearch}/>
                        <span className="glyphicon glyphicon-search form-control-feedback search-icon"></span>
                    </div>
            </div>
        )
    }

}
