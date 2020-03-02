import React, { Component } from 'react';
import Loading from './layout/Loading';
import CancelButton from './layout/CancelBotton';
class PatientDetails extends Component {
    render () {
        if (this.props.patientDetails.medical_data === undefined) {
            return (
                <Loading />
            );
        }
        else {
            console.log(this.props.patientDetails)
            return (
                <div className="container">
                    <div className="card-wrapper">
                        <h4>Personal Information</h4>
                        <div className="row">
                            <div className="col-lg-3">
                                <p>First name: {this.props.patientDetails.first_name}</p>
                            </div>
                            <div className="col-lg-3">
                                <p>Second name: {this.props.patientDetails.second_name}</p>
                            </div>
                            <div className="col-lg-3">
                                <p>Contact number: {this.props.patientDetails.contact_number}</p>
                            </div>
                            <div className="col-lg-3">
                                <p>Assigned doctor: {this.props.patientDetails.contact_number}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Address: {this.props.patientDetails.address}</p>
                            </div>
                        </div>
                        <h4>Next of Kin</h4>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <p>First name: {this.props.patientDetails.next_of_kin1_first_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p>Second name: {this.props.patientDetails.next_of_kin1_second_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p>First name: {this.props.patientDetails.next_of_kin2_first_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p>First name: {this.props.patientDetails.next_of_kin2_second_name}</p>
                            </div>
                        </div>
                        <h4>Medical Infomration</h4>
                        <div className="form-row">
                                <div className="form-group col-md-3">
                                    <p>Age: {this.props.patientDetails.medical_data.age}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Gender: {this.props.patientDetails.medical_data.sex}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Chol: {this.props.patientDetails.medical_data.chol}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>CP: {this.props.patientDetails.medical_data.cp}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <p>Exang: {this.props.patientDetails.medical_data.exang}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Fbs: {this.props.patientDetails.medical_data.fbs}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Oldpeak: {this.props.patientDetails.medical_data.oldpeak}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Restecg: {this.props.patientDetails.medical_data.restecg}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <p>CA: {this.props.patientDetails.medical_data.ca}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Thal: {this.props.patientDetails.medical_data.thal}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Thalach: {this.props.patientDetails.medical_data.thalach}</p>
                                </div>
                                <div className="form-group col-md-3">
                                    <p>Trestbps: {this.props.patientDetails.medical_data.trestbps}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <p>Severity: {this.props.patientDetails.severity}</p>
                                </div>
                            </div>
                        <a href={'condition-visualisation?id=' + this.props.patientDetails._id.$oid} className="btn btn-primary">Visualise condition</a>
                        <CancelButton/>
                    </div>
                </div>
            );
        }
    }
}

export default PatientDetails