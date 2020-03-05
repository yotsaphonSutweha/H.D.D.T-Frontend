import React, { Component } from 'react';
import Cookies  from 'js-cookie';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           cookieName : Cookies.get('session')
        };
    }

    render() {
        if  (this.state.cookieName === undefined) {
            return (
                <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="/">H.D.D.T</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                    </ul>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/patients">Patients</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="top-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/waiting-list">Waiting List</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/diagnose-patient">Diagnose Patient</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={process.env.REACT_APP_SERVER_SIDE_URL + "logout"}>Logout</a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

export default Navbar;