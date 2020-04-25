import React, { Component } from "react";
import PrimaryButton from "./layout/PrimaryBotton";
import axios from 'axios';
import DangerAlert from './layout/DangerAlert';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeId: "",
            jobRole: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            secondName: "",
            contactNumber: "",
            room: "",
            ward: "",
            error: false,
            errorMessage: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToPatientsPage = this.redirectToPatientsPage.bind(this);
        this.setCookie = this.setCookie.bind(this);
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

    setCookie() {
        if(this.state.redirect) {
            const date = new Date();
            const cookies = new Cookies();
            date.setTime(date.getTime() + (60*60*1000));
            cookies.set('hddt', 'signed_in_cookie', { path: '/', expires: date});
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
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/register',
            withCredentials: true,
            data: {
                employee_id: this.state.employeeId,
                job_role: this.state.jobRole,
                password: this.state.password,
                confirm_password: this.state.confirmPassword,
                first_name: this.state.firstName,
                second_name: this.state.secondName,
                contact_number: this.state.contactNumber,
                room: this.state.room,
                ward: this.state.ward
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
                    {this.setCookie()}
                    <div className="content-wrapper user-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="employeeId">Employee ID</label>
                                    <input type="text" className="form-control" name="employeeId" value={this.state.employeeId} onChange={this.handleChange}required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="jobRole">Role selection</label>
                                    <select className="form-control" name="jobRole" value={this.state.jobRole} onChange={this.handleChange} required>
                                        <option selected>Choose...</option>
                                        <option>Doctor</option>
                                        <option>Nurse</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="confirmPassword">Confirm password</label>
                                    <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}  required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="firstName">First name</label>
                                <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label for="secondName">Second name</label>
                                <input type="text" className="form-control" name="secondName" value={this.state.secondName} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label for="contactNumber">Contact number</label>
                                <input type="text" className="form-control" name="contactNumber" value={this.state.contactNumber} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="contactNumber">Room</label>
                                    <input type="text" className="form-control" name="room" value={this.state.room} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="contactNumber">Ward</label>
                                    <input type="text" className="form-control" name="ward" value={this.state.ward} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <PrimaryButton name="Register"/>
                            <div className="register-login-space">
                                <p>Already have an account? <a href="/login" style={{color:"blue"}}>Log In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
        );
    };
}

export default RegisterForm;
