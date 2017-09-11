import React, {Component} from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

export default class NavBar extends Component {

    render() {
        return (
            <nav className={`navbar navbar-default nav-justified ${this.props.extraStyle}`}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link href="/">
                                    <a className="navbar-link mx-5">Latest news</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/all" prefetch>
                                    <a className="navbar-link mx-5">All news</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/promote" prefetch>
                                    <a className="navbar-link mx-5">Promote your event</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/banners" prefetch>
                                    <a className="navbar-link mx-5">Get banner</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" prefetch>
                                    <a className="navbar-link mx-5">Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://softwaremill.com/join-us/" prefetch>
                                    <a className="navbar-link mx-5">HIRING</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    extraStyle: PropTypes.string.isRequired
};
