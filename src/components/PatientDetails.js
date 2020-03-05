import React, { Component } from 'react';
import Loading from './layout/Loading';
import CancelButton from './layout/CancelBotton';
class PatientDetails extends Component {

    constructor(props) {
        super(props);
        this.convertCp = this.convertCp.bind(this);
        this.convertThal = this.convertThal.bind(this);
        this.convertSlope = this.convertSlope.bind(this);
        this.convertRestecg = this.convertRestecg.bind(this);
        this.convertFbs = this.convertFbs.bind(this);
        this.convertExang = this.convertExang.bind(this);
        this.convertGender = this.convertGender.bind(this);
        this.convertSeverity = this.convertSeverity.bind(this);
    }

    convertSeverity(value) {
        if (value === 0) {
            return 'Undetermined';
        }
        return value;
    }

    convertCp(value) {
        if (value === 1 ) {
            return 'Typical anginal';
        }
        else if (value === 2) {
            return 'Atypical anginal';
        }
        else if (value === 3) {
            return 'Non-anginal pain';
        }
        else if (value === 4) {
            return 'Asymptotic';
        }
       
    }

    convertThal(value) {
        if (value === 3) {
            return 'Normal';
        }
        else if (value === 6) {
            return 'Fixed defect';
        }
        else if (value === 7) {
            return 'Reversible defect';
        }
    }

    convertSlope(value) {
        if (value === 1) {
            return 'Upsloping' ;
        } 
        else if (value === 2) {
            return 'Flat';
        }
        else if (value === 3) {
            return 'Downsloping';
        }
    }

    convertRestecg(value) {
        if (value === 0) {
            return 'Normal';
        }
        else if (value === 1) {
            return 'ST-T wave abnormality';
        }
        else if (value === 2) {
            return 'Left ventricular hyperthrophy' ;
        }
    }

    convertGender(value) {
        if (value === 1) {
            return 'Male';
        }
        else {
            return 'Female'
        }
    }

    convertExang(value) {
        if (value === 1) {
            return 'Yes';
        }
        else {
            return 'No';
        }
    }

    convertFbs(value) {
        if (value === 1) {
            return 'Yes';
        }
        else {
            return 'No';
        }
    }


    render () {
        if (this.props.patientDetails.medical_data === undefined) {
            return (
                <Loading />
            );
        }
        else {
            console.log(this.props.patientDetails.slope)
            return (
                <div className="container">
                    <div className="card-wrapper">
                        <h4>Personal Information</h4>
                        <div className="row">
                            <div className="col-lg-3">
                                <p><b>First name:</b> {this.props.patientDetails.first_name}</p>
                            </div>
                            <div className="col-lg-3">
                                <p><b>Second name:</b> {this.props.patientDetails.second_name}</p>
                            </div>
                            <div className="col-lg-3">
                                <p><b>Contact number:</b> {this.props.patientDetails.contact_number}</p>
                            </div>
                            <div className="col-lg-3">
                                <p><b>Assigned doctor:</b> {this.props.patientDetails.contact_number}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p><b>Address:</b> {this.props.patientDetails.address}</p>
                            </div>
                        </div>
                        <h4>Next of Kin</h4>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <p><b>First name:</b> {this.props.patientDetails.next_of_kin1_first_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p><b>Second name:</b> {this.props.patientDetails.next_of_kin1_second_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p><b>First name:</b> {this.props.patientDetails.next_of_kin2_first_name}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <p><b>First name:</b> {this.props.patientDetails.next_of_kin2_second_name}</p>
                            </div>
                        </div>
                        <h4>Medical Infomration</h4>
                        <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Age:</b> {this.props.patientDetails.medical_data.age}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Gender:</b> {this.convertGender(this.props.patientDetails.medical_data.sex)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Serum Cholestrol in mg/dl:</b> {this.props.patientDetails.medical_data.chol}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Chest-pain Type:</b> {this.convertCp(this.props.patientDetails.medical_data.cp)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Exercise Induced Agina:</b> {this.convertExang(this.props.patientDetails.medical_data.exang)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Fasting Blood Sugar (>120mg/dl):</b>{this.convertFbs(this.props.patientDetails.medical_data.fbs)}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>ST Depression Induced:</b> {this.props.patientDetails.medical_data.oldpeak}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Resting Electrocardiographic Result:</b> {this.convertRestecg(this.props.patientDetails.medical_data.restecg)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Number of Major Vessels:</b> {this.props.patientDetails.medical_data.ca}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Thalassemia:</b> {this.convertThal(this.props.patientDetails.medical_data.thal)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Maximum Heart Rate Achieved:</b> {this.props.patientDetails.medical_data.thalach}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Resting Blood Pressure in mmHg:</b> {this.props.patientDetails.medical_data.trestbps}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Slope of Peak Exercise ST Segment:</b> {this.convertSlope(this.props.patientDetails.medical_data.slope)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Severity:</b> {this.convertSeverity(this.props.patientDetails.severity)}</p>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <a href={'condition-visualisation?id=' + this.props.patientDetails._id.$oid} className="btn btn-primary button">Visualise condition</a>
                            </div>
                            <div className="col-lg-2">
                                <a href={'patient?id=' + this.props.patientDetails._id.$oid + '&q=update'} className="btn btn-secondary button">Update</a>
                            </div>
                            <div className="col-lg-2">
                                <CancelButton/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default PatientDetails