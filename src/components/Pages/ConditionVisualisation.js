import React, { Component } from 'react'
import qs from 'query-string';
import axios from 'axios';
import Loading from '../layout/Loading';
import Navbar from '../layout/Navbar';
import CancelButton from '../layout/CancelBotton';
import SuccessAlert from '../layout/SuccessAlert';
import helpers from '../helpers/Helpers';
import DangerAlert from '../layout/DangerAlert';
class ConditionVisualisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientId: '',
            firstName : '',
            secondName : '',
            address: '',
            contactNumber: '',
            nextOfKin1FirstName: '',
            nextOfKin1SecondName : '',
            nextOfKin2FirstName: '',
            nextOfKin2SecondName : '',
            age: '',
            sex: '',
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
            diagnosis: '',
            severity: '',
            selectedXAxis: '',
            selectedYAxis: '',
            x : '',
            severity : '',
            severityAssigned: false,
            source : null,
            error: false,
            errorMessage: '',
            visualisationError: false
        }
        this.handleChangeX = this.handleChangeX.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectXValue = this.selectXValue.bind(this);
        this.selectYValue = this.selectYValue.bind(this);
        this.getSelectedXAxis = this.getSelectedXAxis.bind(this);
        this.getSelectedYAxis = this.getSelectedYAxis.bind(this);
        this.handleAssign = this.handleAssign.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.convertValuesBackToOriginal = this.convertValuesBackToOriginal.bind(this);
        this.checkError = this.checkError.bind(this);
    }

    checkError() {
       if (this.state.visualisationError === true) {
           this.setState({
               visualisationError: false
           });
       }
    }

    handleChangeX(event) {
        this.setState({selectedXAxis: event.target.value});
    }

    handleChangeY(event) {
        this.setState({selectedYAxis: event.target.value});
    }

    getParsedQuery() {
        const parsedQuery = qs.parse(this.props.locationSearch)
        return parsedQuery;
    }

    selectXValue() {
        switch(this.state.selectedXAxis !== 'Choose...') {
            case this.state.selectedXAxis === 'Age':
                return this.state.age;
                break;
            case this.state.selectedXAxis === 'Gender':
                return this.state.sex;
                break;
            case this.state.selectedXAxis === 'Chest-pain Type':
                return this.state.cp;
                break;
            case this.state.selectedXAxis === 'Resting Blood Pressure':
                return this.state.trestbps;
                break;
            case this.state.selectedXAxis === 'Serum Cholesterol':
                return this.state.chol;
                break;
            case this.state.selectedXAxis === 'Fasting Blood Sugar':
                return this.state.fbs;
                break;
            case this.state.selectedXAxis === 'Resting Electrocardiographic Result':
                return this.state.restecg;
                break;    
            case this.state.selectedXAxis === 'Maximum Heart Rate Achieved':
                return this.state.thalach;
                break;
            case this.state.selectedXAxis === 'Exercise Induced Agina':
                return this.state.exang;
                break;
            case this.state.selectedXAxis === 'ST Dpression Induced':
                return this.state.oldpeak;
                break;
            case this.state.selectedXAxis === 'Slope of Peak Exercise ST Segment':
                return this.state.slope;
                break;
            case this.state.selectedXAxis === 'Number of Major Vessels':
                return this.state.ca;
                break;
            case this.state.selectedXAxis === 'Thalassemia':
                return this.state.thal;
                break;
        }
    }

    selectYValue() {
        switch(this.state.selectedYAxis !== 'Choose...') {
            case this.state.selectedYAxis === 'Age':
                return this.state.age;
                break;
            case this.state.selectedYAxis === 'Gender':
                return this.state.sex;
                break;
            case this.state.selectedYAxis === 'Chest-pain Type':
                return this.state.cp;
                break;
            case this.state.selectedYAxis === 'Resting Blood Pressure':
                return this.state.trestbps;
                break;
            case this.state.selectedYAxis === 'Serum Cholesterol':
                return this.state.chol;
                break;
            case this.state.selectedYAxis === 'Fasting Blood Sugar':
                return this.state.fbs;
                break;
            case this.state.selectedYAxis === 'Resting Electrocardiographic Result':
                return this.state.restecg;
                break;    
            case this.state.selectedYAxis === 'Maximum Heart Rate Achieved':
                return this.state.thalach;
                break;
            case this.state.selectedYAxis === 'Exercise Induced Agina':
                return this.state.exang;
                break;
            case this.state.selectedYAxis === 'ST Dpression Induced':
                return this.state.oldpeak;
                break;
            case this.state.selectedYAxis === 'Slope of Peak Exercise ST Segment':
                return this.state.slope;
                break;
            case this.state.selectedYAxis === 'Number of Major Vessels':
                return this.state.ca;
                break;
            case this.state.selectedYAxis === 'Thalassemia':
                return this.state.thal;
                break;
        }
    }

    getSelectedXAxis() {
        if (this.state.selectedXAxis !== undefined){
            return this.state.selectedXAxis;
        }
    }

    getSelectedYAxis() {
        if (this.state.selectedYAxis !== undefined){
            return this.state.selectedYAxis;
        }
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value})
    }

    handleAssign(event) {
        event.preventDefault();
        console.log(this.state.patientId)
        axios({
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Credentials' : true
            },
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/assign-severity',
            withCredentials : true,
            data: {
                severity: this.state.severity,
                patientId: this.state.patientId
            }
        }).then(res => {
            this.setState({severityAssigned: true})
        }).catch(error => {
            this.setState({
                error: true,
                errorMessage: error.response.data.message
            });
        });
    }

    convertValuesBackToOriginal(value) {
        switch(value !== null ) {
            case value === 'Age':
                return 'age';
                break;
            case value === 'Gender':
                return 'sex';
                break;
            case value === 'Chest-pain Type':
                return 'cp';
                break;
            case value === 'Resting Blood Pressure':
                return 'trestbps';
                break;
            case value === 'Serum Cholesterol':
                return 'chol';
                break;
            case value === 'Fasting Blood Sugar':
                return 'fbs';
                break;
            case value === 'Resting Electrocardiographic Result':
                return 'restecg';
                break;    
            case value === 'Maximum Heart Rate Achieved':
                return  'thalach';
                break;
            case value === 'Exercise Induced Agina':
                return 'exang';
                break;
            case value === 'ST Dpression Induced':
                return 'oldpeak';
                break;
            case value === 'Slope of Peak Exercise ST Segment':
                return 'slope';
                break;
            case value === 'Number of Major Vessels':
                return 'ca';
                break;
            case value === 'Thalassemia':
                return 'thal';
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let xAxiValue = this.selectXValue();
        let yAxisValue = this.selectYValue();
        let xAttrName = this.convertValuesBackToOriginal(this.getSelectedXAxis());
        let yAttrName = this.convertValuesBackToOriginal(this.getSelectedYAxis());
        let diagnosis = this.state.diagnosis;
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            responseType : 'arraybuffer', 
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/condition-visualisation',
            withCredentials: true,
            data: {
                xValue : xAxiValue,
                xAttr : xAttrName,
                yValue : yAxisValue,
                yAttr : yAttrName,
                diagnosis : diagnosis
            }
        }).then(res => {
            const base64 = btoa(new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
                ),
            );
            this.setState({ source: "data:;base64," + base64 });
        }).catch(error => {
            this.setState({
                visualisationError: true,
                errorMessage : 'Please choose appropriate medical data option in the drop down(s).'
            })
        });
    }

    componentDidMount() {
        const parsedQuery = this.getParsedQuery();
        axios({
            headers : {
                'Access-Control-Allow-Origin': '*',
                'ccess-Control-Allow-Credentials': true
            },
            method: 'GET',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patient?id=' + parsedQuery.id,
            withCredentials: true,
        }).then(res => this.setState({ 
            patientId: res.data._id['$oid'],
            firstName: res.data.first_name,
            secondName: res.data.second_name,
            contactNumber: res.data.contact_number,
            address: res.data.address,
            nextOfKin1FirstName: res.data.next_of_kin1_first_name,
            nextOfKin1SecondName: res.data.next_of_kin1_second_name,
            nextOfKin2FirstName:  res.data.next_of_kin2_first_name,
            nextOfKin2SecondName: res.data.next_of_kin2_second_name,
            age: res.data.medical_data.age,
            sex: res.data.medical_data.sex,
            cp: res.data.medical_data.cp,
            trestbps: res.data.medical_data.trestbps,
            chol: res.data.medical_data.chol,
            fbs: res.data.medical_data.fbs,
            restecg: res.data.medical_data.restecg,
            thalach: res.data.medical_data.thalach,
            exang: res.data.medical_data.exang,
            oldpeak: res.data.medical_data.oldpeak,
            slope: res.data.medical_data.slope,
            ca: res.data.medical_data.ca,
            thal: res.data.medical_data.thal,
            diagnosis: res.data.medical_data.diagnosis
        })).catch(error => {
            this.setState({
                error: true,
                errorMessage: error.response.data.message
            });
        });
    }

    render() {
        if (!helpers.checkIfCookiesExists()) {
            return (
                <div>
                    <Navbar />
                    <div className="container">
                        <div className="register-login-space">
                            <DangerAlert message="Please Login"/> 
                        </div>
                    </div>
                </div>
            );
        } 
        else {
            if (this.state.age === '' && this.state.x === '') {
                return (
                    <div>
                    <Navbar />
                        <Loading />
                    </div>
                );
            } 
            else {
                if (this.state.error) {
                   return(
                    <div>
                        <Navbar />
                        <div className="container">
                            <div className="register-login-space">
                                <DangerAlert message={this.state.errorMessage}/> 
                            </div>
                        </div>
                    </div>
                   );
                }
                return(
                    <div>
                        <Navbar />
                        <div className="container">
                            <div className="heading">
                                <h3><b>Patient:</b> {this.state.firstName} {this.state.secondName}</h3>
                                <div className="underline"></div>
                                <h4 className="heading"><b>Condition Visualisation</b></h4>
                                <p>Heart disease diagnosis of the patient against the existing data</p>
                            </div>
                            {this.state.visualisationError === true ? <DangerAlert message={this.state.errorMessage}/> :  this.checkError()}
                            {this.state.severityAssigned === true ? <SuccessAlert message="Severity has been assigned successfully! Patient is added to the operation awaiting list."/> : null}
                            <div className="row">
                                <div className="img-area diagnosis-img">
                                    <img src={this.state.source} />
                                </div>
                            </div>
                            <div className="severity-from-wrapper">
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-lg-2">
                                            <input className="form-control" placeholder="Severity" name="severity" value={this.state.severity} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="col-lg-2">
                                            <button type="submit" className="btn btn-secondary button" onClick={e => this.handleAssign(e)}>
                                                Assign
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-lg-6">
                                        <label for="condition1">Medical Condition 1: X axis</label>
                                        <select class="form-control" id="condition1" value={this.state.selectedXAxis} onChange={this.handleChangeX}>
                                            <option selected>Choose...</option>
                                            <option>Age</option>
                                            <option>Number of Major Vessels</option>
                                            <option>Serum Cholesterol</option>
                                            <option>Chest-pain Type</option>
                                            <option>Exercise Induced Agina</option>
                                            <option>Fasting Blood Sugar</option>
                                            <option>ST Dpression Induced</option>
                                            <option>Resting Electrocardiographic Result</option>
                                            <option>Gender</option>
                                            <option>Thalassemia</option>
                                            <option>Maximum Heart Rate Achieved</option>
                                            <option>Resting Blood Pressure</option>
                                            <option>Slope of Peak Exercise ST Segment</option>
                                        </select>
                                        </div>
                                        <div class="form-group col-lg-6">
                                        <label for="condition2">Medical Condition 2: Y axis</label>
                                        <select class="form-control" id="condition2" value={this.state.selectedYAxis} onChange={this.handleChangeY}>
                                            <option selected>Choose...</option>
                                            <option>Age</option>
                                            <option>Number of Major Vessels</option>
                                            <option>Serum Cholesterol</option>
                                            <option>Chest-pain Type</option>
                                            <option>Exercise Induced Agina</option>
                                            <option>Fasting Blood Sugar</option>
                                            <option>ST Dpression Induced</option>
                                            <option>Resting Electrocardiographic Result</option>
                                            <option>Gender</option>
                                            <option>Thalassemia</option>
                                            <option>Maximum Heart Rate Achieved</option>
                                            <option>Resting Blood Pressure</option>
                                            <option>Slope of Peak Exercise ST Segment</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2"> 
                                        <button type="submit" className="btn btn-secondary button" onClick={e => this.handleSubmit(e)}>
                                            Generate
                                        </button>
                                    </div>
                                    <div className="col-lg-2"> 
                                        <CancelButton />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            }
        }
    }
}

export default ConditionVisualisation;