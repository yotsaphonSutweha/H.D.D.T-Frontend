import React, { Component } from 'react'
import PatientList from '../PatientList';
import Header from '../layout/Header'
import axios from 'axios';
import DangerAlert from '../layout/DangerAlert';
import helpers from '../helpers/Helpers';
import Navbar from '../layout/Navbar';
class ViewPatients extends Component {
   constructor(props) {
       super(props);
       this.state = {
           patients : [],
           error: false,
           errorMessage: ''
       }
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
        }).then(res => {
            this.setState({ patients: res.data});
        }).catch(error => {
            this.setState({
                error: true,
                errorMessage: error.response.data.message
            });
        });
    }
    render () {
        const title = "Patients";
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
            return (
                <div>
                    <Navbar />
                    {this.state.error === false ? 
                        <div className="container">
                            <Header title={title}/>
                            <div className="underline"></div>
                            <PatientList patients={this.state.patients} awaiting={false}/>
                        </div>
                    : 
                    <div className="container">
                        <div className="register-login-space">
                            <DangerAlert message={this.state.errorMessage}/> 
                        </div>  
                    </div>}
                </div>
            );
        }
    }
}

export default ViewPatients;