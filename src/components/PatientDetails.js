import React, { Component } from 'react';
import Loading from './layout/Loading';

class PatientDetails extends Component {
    render () {
        if (this.props.patientDetails.medical_data === undefined) {
            return (
                <Loading />
            );
        }
        else {
            return (
                <div>
                    <p>{this.props.patientDetails.first_name}</p>
                    <p>{this.props.patientDetails.second_name}</p>
                    <p>{this.props.patientDetails.address}</p>
                    <p>{this.props.patientDetails.contact_number}</p>
                    <p>{this.props.patientDetails.medical_data.age}</p>
                    <p>{this.props.patientDetails.medical_data.diagnosis}</p>
                    <p>{this.props.patientDetails.severity}</p>
                    <p>{this.props.patientDetails.medical_data.age}</p>
                    <p>{this.props.patientDetails.medical_data.ca}</p>
                    <p>{this.props.patientDetails.medical_data.chol}</p>
                    <p>{this.props.patientDetails.medical_data.cp}</p>
                    <p>{this.props.patientDetails.medical_data.diagnose}</p>
                    <p>{this.props.patientDetails.medical_data.exang}</p>
                    <p>{this.props.patientDetails.medical_data.fbs}</p>
                    <p>{this.props.patientDetails.medical_data.oldpeak}</p>
                    <p>{this.props.patientDetails.medical_data.restecg}</p>
                    <p>{this.props.patientDetails.medical_data.sex}</p>
                    <p>{this.props.patientDetails.medical_data.thal}</p>
                    <p>{this.props.patientDetails.medical_data.thalach}</p>
                    <p>{this.props.patientDetails.medical_data.trestbps}</p>
                </div>
            );
        }
    }
}

export default PatientDetails