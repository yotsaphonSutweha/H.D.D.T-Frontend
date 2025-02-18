import React, { Component } from 'react'
import PrimaryButton from './layout/PrimaryBotton';
import axios from 'axios';
import DangerAlert from './layout/DangerAlert';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

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
        // Binding is used to bind the below methods to the current context of this class
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToPatientsPage = this.redirectToPatientsPage.bind(this);
        this.setCookie = this.setCookie.bind(this);
        this.checkForError = this.checkForError.bind(this);
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

    checkForError() {
        if (this.state.error === true) {
            return this.setState({error : false});
        }
    }

    setCookie() {
        if(this.state.redirect) {
            const date = new Date();
            const cookies = new Cookies();
            date.setTime(date.getTime() + (60*60*1000));
            cookies.set('hddt', 'signed_in_cookie', { path: '/', expires: date});
        }
    }
    // Make POST request to the backend API to log in.
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.error === true) {
            this.setState({
                error : false
            });
        }
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
    // Render method is used for rending HTML elements
    render () {
        return (
            <div className="container">
                {this.state.error === true ? <DangerAlert message={this.state.errorMessage}/> : this.checkForError()}
                {this.redirectToPatientsPage()}
                {this.setCookie()}
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