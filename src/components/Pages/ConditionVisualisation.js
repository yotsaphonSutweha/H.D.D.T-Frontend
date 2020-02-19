import React, { Component } from 'react'
import qs from 'query-string';
import axios from 'axios';
import Loading from '../layout/Loading';
import PrimaryButton from '../layout/PrimaryBotton';

class ConditionVisualisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            diagnosis: '',
            severity: '',
            selectedXAxis: '',
            selectedYAxis: '',
            x : ''
        }
        this.handleChangeX = this.handleChangeX.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectXValue = this.selectXValue.bind(this);
        this.selectYValue = this.selectYValue.bind(this);
        this.getSelectedXAxis = this.getSelectedXAxis.bind(this);
        this.getSelectedYAxis = this.getSelectedYAxis.bind(this);
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
        switch(this.state.selectedXAxis !== '') {
            case this.state.selectedXAxis.toLowerCase() === 'age':
                return this.state.age;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'gender':
                return this.state.gender;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'cp':
                return this.state.cp;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'trestbps':
                return this.state.trestbps;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'chol':
                return this.state.chol;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'fbs':
                return this.state.fbs;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'restecg':
                return this.state.restecg;
                break;    
            case this.state.selectedXAxis.toLowerCase() === 'thalach':
                return this.state.thalach;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'exang':
                return this.state.exang;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'oldpeak':
                return this.state.oldpeak;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'slope':
                return this.state.slope;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'ca':
                return this.state.ca;
                break;
            case this.state.selectedXAxis.toLowerCase() === 'thal':
                return this.state.thal;
                break;
        }
    }

    selectYValue() {
        switch(this.state.selectedYAxis !== '') {
            case this.state.selectedYAxis.toLowerCase() === 'age':
                return this.state.age;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'gender':
                return this.state.gender;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'cp':
                return this.state.cp;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'trestbps':
                return this.state.trestbps;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'chol':
                return this.state.chol;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'fbs':
                return this.state.fbs;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'restecg':
                return this.state.restecg;
                break;    
            case this.state.selectedYAxis.toLowerCase() === 'thalach':
                return this.state.thalach;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'exang':
                return this.state.exang;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'oldpeak':
                return this.state.oldpeak;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'slope':
                return this.state.slope;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'ca':
                return this.state.ca;
                break;
            case this.state.selectedYAxis.toLowerCase() === 'thal':
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

    handleSubmit(event) {
        event.preventDefault();
        let xAxiValue = this.selectXValue();
        let yAxisValue = this.selectYValue();
        let xAttrName = this.getSelectedXAxis().toLowerCase();
        let yAttrName = this.getSelectedYAxis().toLowerCase();
        console.log(xAttrName)
        console.log(yAttrName)
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method : 'POST',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/condition-visualisation',
            withCredentials: true,
            data: {
                xValue : xAxiValue,
                xAttr : xAttrName,
                yValue : yAxisValue,
                yAttr : yAttrName
            }
        }).then(res => {
            console.log(res.data)
            var base64Icon = 'data:image/png;base64,' + res.data;
            this.state.x = base64Icon;
            // this.setState({
            //     completedDiagnosis : true,
            //     results : res.data
            // });
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
            age: res.data.medical_data.age,
            gender: res.data.medical_data.sex,
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
        }))
    }

    render() {
        if (this.state.age === '' && this.state.x === '') {
            return (
                <Loading />
            );
        } else {
            return(
                <div class="container">
                    <image source={{uri: this.state.x}}/>
                    <div>
                        <p>{this.state.age}</p>
                        <p>{this.state.ca}</p>
                        <p>{this.state.chol}</p>
                        <p>{this.state.cp}</p>
                        <p>{this.state.exang}</p>
                        <p>{this.state.fbs}</p>
                        <p>{this.state.oldpeak}</p>
                        <p>{this.state.restecg}</p>
                        <p>{this.state.sex}</p>
                        <p>{this.state.thal}</p>
                        <p>{this.state.thalach}</p>
                        <p>{this.state.trestbps}</p>
                        <p>{this.state.diagnose}</p>
                    </div>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-lg-6">
                                <label for="condition1">Condition number 1: X axis</label>
                                <select class="form-control" id="condition1" value={this.state.selectedXAxis} onChange={this.handleChangeX}>
                                    <option>Age</option>
                                    <option>Ca</option>
                                    <option>Chol</option>
                                    <option>Cp</option>
                                    <option>Exang</option>
                                    <option>Fbs</option>
                                    <option>Oldpeak</option>
                                    <option>Restecg</option>
                                    <option>Gender</option>
                                    <option>Thal</option>
                                    <option>Thalach</option>
                                    <option>Trestbps</option>
                                </select>
                                </div>
                                <div class="form-group col-lg-6">
                                <label for="condition2">Condition number 2: Y axis</label>
                                <select class="form-control" id="condition2" value={this.state.selectedYAxis} onChange={this.handleChangeY}>
                                <option>Age</option>
                                    <option>Ca</option>
                                    <option>Chol</option>
                                    <option>Cp</option>
                                    <option>Exang</option>
                                    <option>Fbs</option>
                                    <option>Oldpeak</option>
                                    <option>Restecg</option>
                                    <option>Gender</option>
                                    <option>Thal</option>
                                    <option>Thalach</option>
                                    <option>Trestbps</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-secondary" onClick={e => this.handleSubmit(e)}>
                        Generate
                        </button>
                    </form>
                </div>
            );
        }
    }
}

export default ConditionVisualisation;