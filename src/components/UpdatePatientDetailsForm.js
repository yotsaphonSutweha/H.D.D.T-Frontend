import React, { Component } from 'react';
import axios from 'axios';
import Header from './layout/Header';
import CancelButton from './layout/CancelBotton';
import { Redirect } from 'react-router-dom';
import SuccessAlert from './layout/SuccessAlert';

class UpdatePatientDetailsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName : '',
            secondName : '',
            address: '',
            contactNumber: '',
            nextOfKin1FirstName: '',
            nextOfKin1SecondName : '',
            nextOfKin2FirstName: '',
            nextOfKin2SecondName : '',
            age: '',
            gender: '',
            cp: '',
            trestbps: '',
            chol: '',
            fbs: '',
            restecg: '',
            thalach: '',
            exang: '',
            oldpeak: '',
            slope: '',
            ca: '',
            thal: '',
            severity: '',
            completedDiagnosis: false,
            results: {},
            completedUpdate: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePatientUpdate = this.handlePatientUpdate.bind(this);
        this.refreshThePage = this.refreshThePage.bind(this);
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

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value});
    }

    refreshThePage() {
        if(this.state.completedUpdate === true) {
            window.location.reload(false);
        }
    }

    componentDidMount() {
        axios({
            headers : {
                'Access-Control-Allow-Credentials': true
            },
            method: 'GET',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patient?id=' + this.props.patientId,
            withCredentials: true,
        }).then(res => this.setState({firstName: res.data.first_name, secondName: res.data.second_name, address: res.data.address, contactNumber: res.data.contact_number, nextOfKin1FirstName: res.data.next_of_kin1_first_name, nextOfKin1SecondName : res.data.next_of_kin1_second_name, nextOfKin2FirstName : res.data.next_of_kin2_first_name, nextOfKin2SecondName : res.data.next_of_kin2_second_name, age: res.data.medical_data.age, gender: res.data.medical_data.sex, chol: res.data.medical_data.chol, thalach: res.data.medical_data.thalach, exang: res.data.medical_data.exang, fbs: res.data.medical_data.fbs, oldpeak: res.data.medical_data.oldpeak, restecg: res.data.medical_data.restecg, ca: res.data.medical_data.ca, slope: res.data.medical_data.slope, thal: res.data.medical_data.thal, cp: res.data.medical_data.cp, trestbps: res.data.medical_data.trestbps, severity: res.data.severity}))
    }

    handlePatientUpdate(event) {
        console.log(this.props.patientId)
        event.preventDefault();
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patient?id=' + this.props.patientId + '&q=update',
            withCredentials: true,
            data: {
                first_name: this.state.firstName,
                second_name: this.state.secondName,
                contact_number: this.state.contactNumber,
                address: this.state.address,
                next_of_kin1_first_name: this.state.nextOfKin1FirstName,
                next_of_kin1_second_name: this.state.nextOfKin1SecondName,
                next_of_kin2_first_name:  this.state.nextOfKin2FirstName,
                next_of_kin2_second_name: this.state.nextOfKin2SecondName,
            }
        }).then(res => {
            res.data.status === 200 ? this.setState({completedUpdate : true}) : this.setState({completedUpdate : false});
        });
    }

    render () {
            return (
                <div className="container">
                <Header title="Edit details"/>
                {this.state.completedUpdate === true ? this.refreshThePage(): null }
                <div className="card-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="first_name"><b>First name</b></label>
                                <input type="text" className= "form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="second_name"><b>Second name</b></label>
                                <input type="text" className= "form-control" name="secondName" value={this.state.secondName} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="contact_number"><b>Contact number</b></label>
                                <input type="text" className= "form-control" name="contactNumber" value={this.state.contactNumber} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="address"><b>Full address</b></label>
                            <input type="text" className= "form-control" name="address" value={this.state.address} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group"> 
                        <h4>Next of Kin</h4>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="nextOfKin1FirstName"><b>First name</b></label>
                                    <input type="text" className="form-control" name="nextOfKin1FirstName" value={this.state.nextOfKin1FirstName} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="nextOfKin1SecondName"><b>Second name</b></label>
                                    <input type="text" className="form-control" name="nextOfKin1SecondName" value={this.state.nextOfKin1SecondName} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="nextOfKin1FirstName"><b>First name</b></label>
                                    <input type="text" className="form-control" name="nextOfKin2FirstName" value={this.state.nextOfKin2FirstName} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="nextOfKin1SecondName"><b>Second name</b></label>
                                    <input type="text" className="form-control" name="nextOfKin2SecondName" value={this.state.nextOfKin2SecondName} onChange={this.handleChange}></input>
                                </div>
                            </div>
                        </div>
                        <h4>Medical Infomration</h4>
                        <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Age:</b> {this.state.age}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Gender:</b> {this.convertGender(this.state.sex)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Serum Cholestrol in mg/dl:</b> {this.state.chol}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Chest-pain Type:</b> {this.convertCp(this.state.cp)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Exercise Induced Agina:</b> {this.convertExang(this.state.exang)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Fasting Blood Sugar (>120mg/dl):</b>{this.convertFbs(this.state.fbs)}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>ST Depression Induced:</b> {this.state.oldpeak}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Resting Electrocardiographic Result:</b> {this.convertRestecg(this.state.restecg)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Number of Major Vessels:</b> {this.state.ca}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Thalassemia:</b> {this.convertThal(this.state.thal)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Maximum Heart Rate Achieved:</b> {this.state.thalach}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Resting Blood Pressure in mmHg:</b> {this.state.trestbps}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p><b>Slope of Peak Exercise ST Segment:</b> {this.convertSlope(this.state.slope)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p><b>Severity:</b> {this.convertSeverity(this.state.severity)}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <button type="submit" className="btn btn-secondary button" onClick={e => this.handlePatientUpdate(e)}>
                                        Update
                                    </button>
                                </div>
                                <div className="col-lg-2">
                                    <CancelButton/>
                                </div>
                            </div>    
                    </form>
                </div>
            </div>
            );
    }
}

export default UpdatePatientDetailsForm;