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
            completedDiagnosis: false,
            results: {},
            completedUpdate: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePatientUpdate = this.handlePatientUpdate.bind(this);
        this.refreshThePage = this.refreshThePage.bind(this);
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
        }).then(res => this.setState({firstName: res.data.first_name, secondName: res.data.second_name, address: res.data.address, contactNumber: res.data.contact_number, nextOfKin1FirstName: res.data.next_of_kin1_first_name, nextOfKin1SecondName : res.data.next_of_kin1_second_name, nextOfKin2FirstName : res.data.next_of_kin2_first_name, nextOfKin2SecondName : res.data.next_of_kin2_second_name, age: res.data.medical_data.age, gender: res.data.medical_data.sex, chol: res.data.medical_data.chol, thalach: res.data.medical_data.thalach, exang: res.data.medical_data.exang, fbs: res.data.medical_data.fbs, oldpeak: res.data.medical_data.oldpeak, restecg: res.data.medical_data.restecg, ca: res.data.medical_data.ca, slope: res.data.medical_data.slope, thal: res.data.medical_data.thal, cp: res.data.medical_data.cp, trestbps: res.data.medical_data.trestbps}))
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
                        <h4>Next of Kin</h4>
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
                        <fieldset disabled>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label for="age">Age</label>
                                    <input type="text" id="disabledTextInput" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} required></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="gender">Gender</label>
                                    <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                                        <option selected>Choose...</option>
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="chol">Chol</label>
                                    <input type="text" className="form-control" name="chol" value={this.state.chol} onChange={this.handleChange} required></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="thalach">Thalach</label>
                                    <input type="text" className="form-control" name="thalach" value={this.state.thalach} onChange={this.handleChange} required></input>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label for="exang">Exang</label>
                                    <select className="form-control" name="exang" value={this.state.exang} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="fbs">Fbs</label>
                                    <select className="form-control" name="fbs" value={this.state.fbs} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="oldpeak">Oldpeak</label>
                                    <select className="form-control" name="oldpeak" value={this.state.oldpeak} onChange={this.handleChange} required>
                                        <option selected>Choose...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="restecg">Restecg</label>
                                    <select className="form-control" name="restecg" value={this.state.restecg} onChange={this.handleChange} required>
                                        <option selected>Choose...</option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label for="ca">CA</label>
                                    <select className="form-control" name="ca" value={this.state.ca} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="slope">Slope</label>
                                    <select className="form-control" name="slope" value={this.state.slope} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="thal">Thal</label>
                                    <select className="form-control" name="thal" value={this.state.thal} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>3</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="cp">CP</label>
                                    <select className="form-control" name="cp" value={this.state.cp} onChange={this.handleChange}required>
                                        <option selected>Choose...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label for="trestbps">Trestbps</label>
                                    <input type="text" className="form-control" name="trestbps" value={this.state.trestbps} onChange={this.handleChange}required></input>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" className="btn btn-secondary" onClick={e => this.handlePatientUpdate(e)}>
                            Update
                        </button>
                        <CancelButton />
                    </form>
                </div>
            </div>
            );
    }
}

export default UpdatePatientDetailsForm;