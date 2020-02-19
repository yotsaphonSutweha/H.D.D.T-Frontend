import React, { Component } from 'react';
import DiagnosePatientForm from '../DiagnosePatientForm';
import Navbar from '../layout/Navbar';


class DiagnosePatient extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <DiagnosePatientForm/>
            </div>
        );
    }
}   

export default DiagnosePatient;