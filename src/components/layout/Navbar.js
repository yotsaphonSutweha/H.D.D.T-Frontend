import React, { Component } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Redirect } from 'react-router-dom';
class Navbar extends Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.state = {
           cookieName : cookies.get("hddt"),
           redirect: false
        };
        this.unsetCookie = this.unsetCookie.bind(this);
        this.redirectToLoginPage = this.redirectToLoginPage.bind(this);
    }
    
    unsetCookie(event) {
        event.preventDefault();
        const cookies = new Cookies();
        cookies.remove("hddt");
        axios({
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method : "GET",
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/logout',
            withCredentials: true
        }).then(res => {
            console.log(res);
            this.setState({
                redirect: true
            });
        });

    }

    redirectToLoginPage() {
        if(this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        if  (this.state.cookieName === undefined) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
                        <a className="navbar-brand" href="/home">H.D.D.T</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="top-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="login">Login</a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        } 
        else {
            return (
                <div>
                    {this.redirectToLoginPage()}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light  navbar-custom">
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
                                    <a className="nav-link" onClick={this.unsetCookie} href="/login">Logout</a>
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