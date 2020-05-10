import React, { Component } from 'react'
import Loading from './layout/Loading';
import MlModelsTable from './MlModelsTable';
class Results extends Component {

    constructor(props) {
        super(props);
        // Binding is used to bind the below methods to the current context of this class
        this.convertCp = this.convertCp.bind(this);
        this.convertThal = this.convertThal.bind(this);
        this.convertSlope = this.convertSlope.bind(this);
        this.convertRestecg = this.convertRestecg.bind(this);
        this.convertFbs = this.convertFbs.bind(this);
        this.convertExang = this.convertExang.bind(this);
        this.convertGender = this.convertGender.bind(this);
        this.convertDiagnosticResult = this.convertDiagnosticResult.bind(this);
    }

    // The convert methods are used to convert medical data that are represented as numbers into plan language.
    convertDiagnosticResult(value) {
        if (value === 1) {
            return 'Diagnosed'
        }
        return 'Undiagnosed'
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
    // Render method is used for rending HTML elements
    render () {
        console.log(this.props.diagnosticResult)
        if (this.props.diagnosticResult === undefined) {
            return (
                <Loading />
            )
        }
        else {
            return (
                <div className="container">
                    <div className="card-wrapper">
                        <div className="row heading">
                            <div className="col-lg-6">
                                <h5 id="diagnosticAccuracy">
                                    <b>Diagnostic Accuracy</b>
                                </h5>
                                <p class="card-text">{this.props.diagnosticResult.accuracy} %</p>
                            </div>
                            <div className="col-lg-6">
                                <h5 id="diagnosticResult">
                                    <b>Diagnostic Result</b>
                                </h5>
                                <p class="card-text">{this.convertDiagnosticResult(this.props.diagnosticResult.medical_details.diagnosis)}</p>
                            </div>
                        </div>
                    </div>
                     <div className="card-wrapper">
                            <h4 id="personalInfoHeading">Personal Information</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <p id="firstName"><b>First name:</b> {this.props.diagnosticResult.personal_details.first_name}</p>
                                </div>
                                <div className="col-lg-4">
                                    <p id="secondName"><b>Second name:</b> {this.props.diagnosticResult.personal_details.second_name}</p>
                                </div>
                            </div>
                            <h4 id="medicalInfoHeading">Medical Information</h4>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p id="age"><b>Age:</b> {this.props.diagnosticResult.medical_details.age}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="gender"><b>Gender:</b> {this.convertGender(this.props.diagnosticResult.medical_details.sex)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="chol"><b>Serum Cholestrol in mg/dl:</b> {this.props.diagnosticResult.medical_details.chol}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p id="cp"><b>Chest-pain Type:</b> {this.convertCp(this.props.diagnosticResult.medical_details.cp)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="exang"><b>Exercise Induced Agina:</b> {this.convertExang(this.props.diagnosticResult.medical_details.exang)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="fbs"><b>Fasting Blood Sugar (>120mg/dl):</b>   {this.convertFbs(this.props.diagnosticResult.medical_details.fbs)}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p id="oldpeak"><b>ST Depression Induced:</b> {this.props.diagnosticResult.medical_details.oldpeak}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="restecg"><b>Resting Electrocardiographic Result:</b> {this.convertRestecg(this.props.diagnosticResult.medical_details.restecg)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="ca"><b>Number of Major Vessels:</b> {this.props.diagnosticResult.medical_details.ca}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p id="thal"><b>Thalassemia:</b> {this.convertThal(this.props.diagnosticResult.medical_details.thal)}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="thalach"><b>Maximum Heart Rate Achieved:</b> {this.props.diagnosticResult.medical_details.thalach}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <p id="trestbps"><b>Resting Blood Pressure in mmHg:</b> {this.props.diagnosticResult.medical_details.trestbps}</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <p id="slope"><b>Slope of Peak Exercise ST Segment:</b> {this.convertSlope(this.props.diagnosticResult.medical_details.slope)}</p>
                                </div>
                            </div>
                        </div>
                        <MlModelsTable models={this.props.diagnosticResult.models_details}/>
                </div>
            );
        }
    }
}

export default Results;