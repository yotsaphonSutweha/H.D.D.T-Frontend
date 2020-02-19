import React, { Component } from 'react';
import PrimaryButton from './layout/PrimaryBotton';


class RegisterForm extends Component {
  render () {
  return (
        <div className="container">
            <div className="content-wrapper user-form">
                <form method="POST" action={process.env.REACT_APP_SERVER_SIDE_URL + 'register'}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="employeeId">Employee ID</label>
                            <input type="text" className="form-control" name="employeeId" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="jobRole">Role selection</label>
                            <select className="form-control" name="jobRole" required>
                                <option selected>Choose...</option>
                                <option>Doctor</option>
                                <option>Nurse</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="password" className="form-control" name="confirmPassword" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" required/>
                    </div>
                    <div className="form-group">
                        <label for="secondName">Second Name</label>
                        <input type="text" className="form-control" name="secondName" required/>
                    </div>
                    <div className="form-group">
                        <label for="contactNumber">Contact Number</label>
                        <input type="text" className="form-control" name="contactNumber" required/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="contactNumber">Room</label>
                            <input type="text" className="form-control" name="room" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="contactNumber">Ward</label>
                            <input type="text" className="form-control" name="ward" required/>
                        </div>
                    </div>
                    <PrimaryButton name = "Register"/>
                </form>
            </div>
        </div>
  );
  };
}

export default RegisterForm;
