import React ,{ Component } from 'react';
import PrimaryButton from './layout/PrimaryBotton';
import Results from './Results';
import axios from 'axios';
import Header from './layout/Header';
import CancelButton from './layout/CancelBotton';
import DangerAlert from './layout/DangerAlert';
import helpers from './helpers/Helpers';
class DiagnosePatientForm extends Component {
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
            completedDiagnosis: false,
            results: {},
            inputError: false,
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertRestecg = this.convertRestecg.bind(this);
        this.convertSlope = this.convertSlope.bind(this);
        this.convertCp = this.convertCp.bind(this);
        this.convertThal = this.convertThal.bind(this);
        this.checkIfValueIsInteger = this.checkIfValueIsInteger.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value});
    }

    checkIfValueIsInteger(value) {
        if (typeof value === 'number') {
            return true;
        } 
        else {
            return false;
        }
    }

    convertCp(value) {
        if (value === 'Typical anginal') {
            return 1;
        }
        else if (value === 'Atypical anginal') {
            return 2;
        }
        else if (value === 'Non-anginal pain') {
            return 3;
        }
        else if (value === 'Asymptotic') {
            return 4;
        }
        else {
            this.setState({inputError: true});
        }
    }

    convertThal(value) {
        if (value === 'Normal') {
            return 3;
        }
        else if (value === 'Fixed defect') {
            return 6;
        }
        else if (value === 'Reversible defect') {
            return 7;
        }
        else {
            this.setState({inputError: true});
        }
    }

    convertSlope(value) {
        if (value === 'Upsloping') {
            return 1;
        } 
        else if (value === 'Flat') {
            return 2;
        }
        else if (value === 'Downsloping') {
            return 3;
        }
        else {
            this.setState({inputError: true});
        }
    }

    convertRestecg(value) {
        if (value === 'Normal') {
            return 0;
        }
        else if (value === 'ST-T wave abnormality') {
            return 1;
        }
        else if (value === 'Left ventricular hyperthrophy') {
            return 2;
        }
        else {
            this.setState({inputError: true});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/diagnosis',
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
                age: this.state.age,
                gender: this.state.gender == "Male" ? 1 : 0,
                cp: this.convertCp(this.state.cp),
                trestbps: this.state.trestbps,
                chol: this.state.chol,
                fbs: this.state.fbs == "Yes" ? 1 : 0,
                restecg: this.convertRestecg(this.state.restecg),
                thalach: this.state.thalach,
                exang: this.state.exang == "Yes" ? 1 : 0,
                oldpeak: this.state.oldpeak,
                slope: this.convertSlope(this.state.slope),
                ca: this.state.ca,
                thal: this.convertThal(this.state.thal)
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                completedDiagnosis : true,
                results : res.data
            }) 
        }).catch(error => {
            this.setState({
                inputError : true,
                errorMessage : error.response.data.message
            });
        });
    }
    render () {
            if (this.state.completedDiagnosis) {
                console.log(this.state.results.accuracy)
                console.log(this.state.results)
                return <Results diagnosticResult = {this.state.results}/>
            } 
            else {
                return (
                    <div className="container">
                        <Header title="Diagnose Patient"/>
                        <div className="underline"></div>
                        {this.state.inputError === true ? <DangerAlert message={this.state.errorMessage}/> : null}
                        <div className="card-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <h4><b>Personal Information</b></h4>
                                <div className="underline-leftest"></div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="first_name">First name</label>
                                        <input type="text" className= "form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="second_name">Second name</label>
                                        <input type="text" className= "form-control" name="secondName" value={this.state.secondName} onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="contact_number">Contact number</label>
                                        <input type="text" className= "form-control" name="contactNumber" value={this.state.contactNumber} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="address">Full address</label>
                                    <input type="text" className= "form-control" name="address" value={this.state.address} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group"> 
                                <h4><b>Next of Kin</b></h4>
                                <div className="underline-leftest"></div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="nextOfKin1FirstName">First name</label>
                                            <input type="text" className="form-control" name="nextOfKin1FirstName" value={this.state.nextOfKin1FirstName} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="nextOfKin1SecondName">Second name</label>
                                            <input type="text" className="form-control" name="nextOfKin1SecondName" value={this.state.nextOfKin1SecondName} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="nextOfKin1FirstName">First name</label>
                                            <input type="text" className="form-control" name="nextOfKin2FirstName" value={this.state.nextOfKin2FirstName} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="nextOfKin1SecondName">Second name</label>
                                            <input type="text" className="form-control" name="nextOfKin2SecondName" value={this.state.nextOfKin2SecondName} onChange={this.handleChange}></input>
                                        </div>
                                    </div>
                                </div>
                                <h4><b>Medical Information</b></h4>
                                <div className="underline-leftest"></div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="age">Age</label>
                                        <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} required></input>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="gender">Gender</label>
                                        <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                                            <option selected>Choose...</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="chol">Serum Cholestrol in mg/dl</label>
                                        <input type="text" className="form-control" name="chol" value={this.state.chol} onChange={this.handleChange} required></input>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="thalach">Maximum Heart Rate Achieved</label>
                                        <input type="text" className="form-control" name="thalach" value={this.state.thalach} onChange={this.handleChange} required></input>
                                    </div>
                                </div>
        
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="exang">Exercise Induced Agina</label>
                                        <select className="form-control" name="exang" value={this.state.exang} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="fbs">Fasting Blood Sugar (>120mg/dl)</label>
                                        <select className="form-control" name="fbs" value={this.state.fbs} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="oldpeak">ST Depression Induced</label>
                                        <select className="form-control" name="oldpeak" value={this.state.oldpeak} onChange={this.handleChange} required>
                                            <option selected>Choose...</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="restecg">Resting Electrocardiographic Result</label>
                                        <select className="form-control" name="restecg" value={this.state.restecg} onChange={this.handleChange} required>
                                            <option selected>Choose...</option>
                                            <option>Normal</option>
                                            <option>ST-T wave abnormality</option>
                                            <option>Left ventricular hyperthrophy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="ca">Number of Major Vessels</label>
                                        <select className="form-control" name="ca" value={this.state.ca} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="slope">Slope of Peak Exercise ST Segment</label>
                                        <select className="form-control" name="slope" value={this.state.slope} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>Upsloping</option>
                                            <option>Flat</option>
                                            <option>Downsloping</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="thal">Thalassemia</label>
                                        <select className="form-control" name="thal" value={this.state.thal} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>Normal</option>
                                            <option>Fixed defect</option>
                                            <option>Reversible defect</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="cp">Chest-pain Type</label>
                                        <select className="form-control" name="cp" value={this.state.cp} onChange={this.handleChange}required>
                                            <option selected>Choose...</option>
                                            <option>Typical anginal</option>
                                            <option>Atypical anginal</option>
                                            <option>Non-anginal pain</option>
                                            <option>Asymptotic</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="trestbps">Resting Blood Pressure in mmHg</label>
                                        <input type="text" className="form-control" name="trestbps" value={this.state.trestbps} onChange={this.handleChange}required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <PrimaryButton name="Diagnose"/>
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
}

export default DiagnosePatientForm;