import React, { Component } from 'react';


class PatientItem extends Component {
    render () {
        console.log(this.props.patient.medical_data.diagnosis)
        return (
            <div> 
                <p>{this.props.patient.first_name}</p>
                <p>{this.props.patient.second_name}</p>
                <p>{this.props.patient.address}</p>
                <p>{this.props.patient.contact_number}</p>
                <p>{this.props.patient.medical_data.age}</p>
                <p>{this.props.patient.medical_data.diagnosis}</p>
                <p>{this.props.patient.severity}</p>
                <a href={'patient?id=' + this.props.patient._id.$oid}>View</a>
            </div>
        );
    }
}

export default PatientItem