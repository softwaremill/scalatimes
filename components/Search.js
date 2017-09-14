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
            <div className="search mx-xs-4">
                <div className="col-xs-12 col-sm-10 has-feedback mx-auto search-max-width">
                    <label htmlFor="search_phrase" className="sr-only">Search phrase</label>
                    <input type="text" className="px-sm-3"
                           id="search_phrase" placeholder="Search phrase"
                           ref={(input) => {this.phrase = input;}}
                           onKeyPress={this.handleSearch}/>
                    <span className="fa fa-search form-control-feedback search-icon"></span>
                </div>
            </div>
        )
    }

}
