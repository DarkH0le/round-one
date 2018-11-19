import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { Boxin } from 'react-icons/fa';
import { Link } from '@reach/router';
import MainImages from "../images/icon-round.png";

import { StickyContainer, Sticky } from 'react-sticky';


class NavigationBar extends Component {
    render() {
        const { user } = this.props;

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-danger navbar-dark higher Header_root">
                <div className="container-fluid">
                    {/*<img src="images/icon-round.png" className="img-thumbnail"/>*/}
                    <Link to="/" className="navbar-brand">
                        <FaBars className="mr-1 text-center align-baseline te" /> <span className="w-75 p-3">Round One Box & Fitness</span>
                    </Link>
                    <div className="navbar-nav ml-auto">
                        {user && (
                            <Link className="nav-item nav-link" to="/meetings">
                                meetings
                            </Link>
                        )}
                        {!user && (
                            <Link className=" btn btn-success mr-2 font-weight-bold" to="/login">
                                Log in
                            </Link>
                        )}
                        {!user && (
                            <Link className="nav-item nav-link btn btn-dark" to="/register">
                                Register
                            </Link>
                        )}
                        {user && (
                            <Link className=" nav-link font-weight-bold" to="/login">
                                Log out
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

        );
    }
}
export default NavigationBar;