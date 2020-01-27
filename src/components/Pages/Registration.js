import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import Header from '../layout/Header'

class Registration extends Component {
    render () {
        const title = "Register page";
        return (
            <div>
                <Header title={title}/>
                <RegisterForm />
            </div>
        );
    }
}

export default Registration;