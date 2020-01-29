import React, { Component } from 'react'
import Header from '../layout/Header'
import qs from 'query-string';
import axios from 'axios';
import PatientDetails from '../PatientDetails';
class ViewPatient extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         patient : []
    //     }
    // }
    state = {
        patient : []
    }
    componentDidMount() {
        const parsedQuery = qs.parse(this.props.locationSearch)
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
        return (
            <PatientDetails patientDetails = {this.state.patient}/>
        );
    }
}

export default ViewPatient;