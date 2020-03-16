import React, { Component } from 'react'
import PrimaryButton from './layout/PrimaryBotton';
class LoginForm extends Component {
    render () {
        return (
            <div className="container">
                 <div class="content-wrapper user-form">
                    <form method="POST" action={process.env.REACT_APP_SERVER_SIDE_URL + "login"}>
                        <div className="form-group">
                            <label for="employeeId">Employee ID</label>
                            <input type="text" className="form-control" name="employeeId"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password"/>
                        </div>
                        <PrimaryButton name="Log In" />
                    </form>
                    <div className="register-login-space">
                        <p>No account?  <a href="/register" style={{color:"blue"}}>Register</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm