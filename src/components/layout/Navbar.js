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
                    <ul className="nav">
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
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/patients">Patients</a>
                        </li>
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
            );
        }
    }
}

export default Navbar;