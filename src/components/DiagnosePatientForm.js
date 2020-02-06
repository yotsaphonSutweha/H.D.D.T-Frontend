import React ,{ Component } from 'react';
import PrimaryButton from './layout/PrimaryBotton';
import Result from './Results';
import axios from 'axios';
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
            results: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value});
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
                gender: this.state.gender,
                cp: this.state.cp,
                trestbps: this.state.trestbps,
                chol: this.state.chol,
                fbs: this.state.fbs,
                restecg: this.state.restecg,
                thalach: this.state.thalach,
                exang: this.state.exang,
                oldpeak: this.state.oldpeak,
                slope: this.state.slope,
                ca: this.state.ca,
                thal: this.state.thal
            }
        }).then(res => {
            console.log(this.state.completedDiagnosis)
            this.setState({
                completedDiagnosis : true,
                results : res.data
            });
            console.log(this.state.completedDiagnosis)
        });

    }
    render () {
        if (this.state.completedDiagnosis) {
            console.log(this.state.results.accuracy)
            console.log(this.state.results)
            return <Result diagnosticResult = {this.state.results}/>
        } 
        else {
        return (
            <div className="container">
                <h1>Add patient</h1>
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

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label for="age">Age</label>
                            <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} required></input>
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
                    <PrimaryButton />
                </form>
            </div>
        );
        }
    }
}

export default DiagnosePatientForm;