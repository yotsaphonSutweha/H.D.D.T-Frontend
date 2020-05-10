import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import Header from '../layout/Header'
import Navbar from '../layout/Navbar';
class Registration extends Component {
    // Render method is used for rending HTML elements
    render () {
        const title = "Register page";
        return (
            <div>
                <Navbar />
                <RegisterForm />
            </div>
        );
    }
}

export default Registration;