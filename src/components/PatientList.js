import React, { Component } from 'react';
import axios from 'axios';

class PatientList extends Component {

    componentDidMount() {
        axios({
            headers : {
                'Access-Control-Allow-Origin': '*',
                'ccess-Control-Allow-Credentials': true
            },
            method: 'GET',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/view-patients',
            withCredentials: true,
        }).then(res => console.log(res.data))
    }

    render () {
        return (
            <div className="container">
                
            </div>
        );
    }
}

export default PatientList