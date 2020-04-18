import React, { Component } from 'react'
import PrimaryButton from './layout/PrimaryBotton';
import axios from 'axios';
import DangerAlert from './layout/DangerAlert';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeId: "",
            password: "",
            error: false,
            errorMessage: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToPatientsPage = this.redirectToPatientsPage.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value})
    }

    redirectToPatientsPage() {
        if(this.state.redirect) {
            return <Redirect to='/patients' />
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/login',
            withCredentials: true,
            data: {
                employee_id: this.state.employeeId,
                password: this.state.password,
            }
        }).then(res => {
            console.log(res);
            this.setState({
                redirect: true
            });
        }).catch(error => {
            this.setState({
                error: true,
                errorMessage: error.response.data.message
            });
        });
    }

    render () {
        return (
            <div className="container">
                {this.state.error === true ? <DangerAlert message={this.state.errorMessage}/> : null}
                {this.redirectToPatientsPage()}
                 <div class="content-wrapper user-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="employeeId">Employee ID</label>
                            <input type="text" className="form-control" name="employeeId" value={this.state.employeeId} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
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