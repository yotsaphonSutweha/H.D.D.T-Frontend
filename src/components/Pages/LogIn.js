import React, { Component } from 'react';
import LoginForm from '../LoginForm';
import Navbar from '../layout/Navbar';
class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        );
    }
}

export default Login