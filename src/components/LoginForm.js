import React, { Component } from 'react'
import PrimaryButton from './layout/PrimaryBotton';

class LoginForm extends Component {
    render () {
        return (
            <div className="container">
                <form method="POST" action={process.env.REACT_APP_SERVER_SIDE_URL + "login"}>
                <div className="form-group">
                    <label for="doctorId">Doctor ID</label>
                    <input type="text" className="form-control" name="doctorId"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <PrimaryButton />
            </form>
            </div>
        );
    }
}

export default LoginForm