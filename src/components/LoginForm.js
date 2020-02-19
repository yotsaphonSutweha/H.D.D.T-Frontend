import React, { Component } from 'react'
import PrimaryButton from './layout/PrimaryBotton';
class LoginForm extends Component {
    render () {
        return (
            <div className="container">
                 <div class="content-wrapper user-form">
                    <form method="POST" action={process.env.REACT_APP_SERVER_SIDE_URL + "login"}>
                        <div className="form-group">
                            <label for="doctorId">Doctor ID</label>
                            <input type="text" className="form-control" name="doctorId"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password"/>
                        </div>
                        <PrimaryButton name="Sign In" />
                        <a href="/register">Need to sign up?</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm