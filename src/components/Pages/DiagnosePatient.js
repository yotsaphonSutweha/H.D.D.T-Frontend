import React, { Component } from 'react';
import DiagnosePatientForm from '../DiagnosePatientForm';
import Navbar from '../layout/Navbar';
import helpers from '../helpers/Helpers';
import DangerAlert from '../layout/DangerAlert';

class DiagnosePatient extends Component {
    // Render method is used for rending HTML elements
    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                    {helpers.checkIfCookiesExists() === true ? <DiagnosePatientForm/> 
                    : 
                    <div className="register-login-space">
                        <DangerAlert message="Please Login"/>
                    </div>}
                </div>
            </div>
        );
    }
}   

export default DiagnosePatient;