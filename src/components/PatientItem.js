import React, { Component } from 'react';
import DeleteButton from './layout/TertiaryButton';
import axios from 'axios';
import SuccessAlert from './layout/SuccessAlert';
class PatientItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name : this.props.patient.first_name,
            second_name : this.props.patient.second_name,
            address : this.props.patient.address,
            contact_number : this.props.patient.contact_number,
            age : this.props.patient.medical_data.age,
            diagnosis : this.props.patient.medical_data.diagnosis === 0 ? 'Undiagnosed': "Diagnosed" ,
            severity: this.props.patient.severity,
            awaiting_list_flag : this.props.awaiting,
            delete_success: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.convertSeverity = this.convertSeverity.bind(this);
    }

    convertSeverity(value) {
        if (value === 0) {
            return 'Undetermined';
        }
        return value;
    }
    

    handleChange() {
        this.setState = {
            first_name : '',
            second_name : '',
            address : '',
            contact_number : '',
            age : '',
            diagnosis : '',
        }
    }

    handleDelete(event) {
        event.preventDefault();
        axios({
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            method: 'DELETE',
            url: process.env.REACT_APP_SERVER_SIDE_URL + 'api/patient?q=delete',
            withCredentials: true,
            data: {
                patient_id : this.props.patient._id['$oid']
            }
        }).then(res => res.data.status === 200 ? this.setState({delete_success : true}) : this.setState({delete_success : false}));
    }

    render () {
            if (this.state.delete_success === true) {
              return (
               <SuccessAlert message="Patient has been deleted successfully!"/>
              );    
            } else {
                return (
                    <div className="card card-wrapper"> 
                        <div className="row row-wrapper">
                            <div className="col-lg-2">
                                <h5 align="center"><b>First name</b></h5>
                                <p className="patient-detail">{this.state.first_name}</p>
                            </div>
                            <div className="col-lg-2">
                                <h5 align="center"><b>Second name</b></h5>
                                <p className="patient-detail">{this.state.second_name}</p>
                            </div>
                            <div className="col-lg-2">
                                <h5 align="center"><b>Address</b></h5>
                                <p className="patient-detail">{this.state.address}</p>
                            </div>
                            <div className="col-lg-2">
                                <h5 align="center"><b>Contact no.</b></h5>
                                <p className="patient-detail">{this.state.contact_number}</p>
                            </div>
                            <div className="col-lg-2">
                                <h5 align="center"><b>Age</b></h5>
                                <p className="patient-detail">{this.state.age}</p>
                            </div>
                            {this.state.awaiting_list_flag == true ?  <div className="col-lg-2">
                                <h5 align="center"><b>Severity</b></h5>
                                <p className="patient-detail">{this.convertSeverity(this.state.severity)}</p>
                            </div> : <div className="col-lg-2">
                                <h5 align="center"><b>Diagnosis</b></h5>
                                <p className="patient-detail">{this.state.diagnosis}</p>
                            </div>}
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <a href={'patient?id=' + this.props.patient._id.$oid}className="btn btn-primary button">View</a>
                            </div>
                            <div className="col-lg-2">
                                <a href={'patient?id=' + this.props.patient._id.$oid + '&q=update'} className="btn btn-secondary button">Update</a>
                            </div>
                            <div className="col-lg-2">
                                <button  type='submit' className="btn btn-danger button" onClick={e => this.handleDelete(e)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
    }
}

export default PatientItem