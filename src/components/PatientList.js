import React, { Component } from 'react';
import PatientItem from './PatientItem';

class PatientList extends Component {
    render () {
       return this.props.patients.map((patient) => {
            console.log(patient.first_name)
            return <PatientItem patient={patient}/>
       });
    }
}
export default PatientList