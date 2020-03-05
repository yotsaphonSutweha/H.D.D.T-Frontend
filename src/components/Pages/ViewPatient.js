import React, { Component } from 'react'
import qs from 'query-string';
import axios from 'axios';
import PatientDetails from '../PatientDetails';
import UpdatePatientDetailsForm from '../UpdatePatientDetailsForm';
import Navbar from '../layout/Navbar';
import helpers from '../helpers/Helpers'
import DangerAlert from '../layout/DangerAlert';
class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient : [],
            error: false,
            errorMessage: ''
        }
    }
   
    getParsedQuery() {
        const parsedQuery = qs.parse(this.props.locationSearch)
        return parsedQuery;
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
        }).then(res => {
            this.setState({ patient: res.data})
        }).catch(error => {
            this.setState({
                error: true,
                errorMessage: error.response.data.message
            });
        })
    }

    render () {
        const title = "Patient page";
        const parsedQuery = this.getParsedQuery();
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
            if(this.state.error) {
                return (
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
            return (
                <div>
                    <Navbar />
                    {parsedQuery.q == 'update' ? <UpdatePatientDetailsForm patientId = {parsedQuery.id} /> : <PatientDetails patientDetails = {this.state.patient}/>}
                </div>
            );
        }
    }
}

export default ViewPatient;