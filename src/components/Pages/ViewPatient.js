import React, { Component } from 'react'
import Header from '../layout/Header'
import qs from 'query-string';
import axios from 'axios';
import PatientDetails from '../PatientDetails';
import UpdatePatientDetailsForm from '../UpdatePatientDetailsForm';
import Navbar from '../layout/Navbar';
class ViewPatient extends Component {
    state = {
        patient : []
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
        }).then(res => this.setState({ patient: res.data}))
    }

    render () {
        const title = "Patient page";
        const parsedQuery = this.getParsedQuery();
        return (
            <div>
                <Navbar />
                {parsedQuery.q == 'update' ? <UpdatePatientDetailsForm patientId = {parsedQuery.id} /> : <PatientDetails patientDetails = {this.state.patient}/>}
            </div>
        );
    }
}

export default ViewPatient;