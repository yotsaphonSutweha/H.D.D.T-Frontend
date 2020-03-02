import React, { Component } from 'react'
import PatientList from '../PatientList';
import Header from '../layout/Header'
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
class ViewPatients extends Component {
    state = {
        patients : []
    }
    componentDidMount() {
        axios({
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method: 'GET',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patients',
            withCredentials: true,
        }).then(res => this.setState({ patients: res.data}))
    }
    render () {
        const title = "Patients";
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Header title={title}/>
                    <PatientList patients={this.state.patients} awaiting={false}/>
                </div>
            </div>
        );
    }
}

export default ViewPatients;