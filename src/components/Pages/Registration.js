import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import Header from '../layout/Header'
import Navbar from '../layout/Navbar';
class Registration extends Component {
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