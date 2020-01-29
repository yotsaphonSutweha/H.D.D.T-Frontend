import React, { Component } from 'react'
import PatientList from '../PatientList';
import Header from '../layout/Header'
import axios from 'axios';
import PropTypes from 'prop-types';

class ViewPatients extends Component {
    state = {
        patients : []
    }
    componentDidMount() {
        axios({
            headers : {
                'Access-Control-Allow-Origin': '*',
                'ccess-Control-Allow-Credentials': true
            },
            method: 'GET',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patients',
            withCredentials: true,
        }).then(res => this.setState({ patients: res.data}))
    }
    render () {
        const title = "Patients page";
        return (
            <div>
                <Header title={title}/>
                <PatientList patients={this.state.patients}/>
            </div>
        );
    }
}

export default ViewPatients;