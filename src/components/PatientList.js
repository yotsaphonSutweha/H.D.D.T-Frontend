import React, { Component } from 'react';
import PatientItem from './PatientItem';

class PatientList extends Component {
    render () {
       return this.props.patients.map((patient) => {
            console.log(patient.first_name)
            return <PatientItem patient={patient} awaiting={this.props.awaiting}/>
       });
    }
}
export default PatientList