import React, { Component } from 'react';
import PatientItem from './PatientItem';

class PatientList extends Component {
    // Render method is used for rending HTML elements
    render () {
       return this.props.patients.map((patient) => {
            return <PatientItem key={patient._id['$oid']} patient={patient} awaiting={this.props.awaiting}/>
       });
    }
}
export default PatientList