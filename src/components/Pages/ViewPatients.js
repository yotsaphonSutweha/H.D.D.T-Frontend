import React, { Component } from 'react'
import PatientList from '../PatientList';
import Header from '../layout/Header'

class ViewPatients extends Component {
    render () {
        const title = "Patients page";
        return (
            <div>
                <Header title={title}/>
                <PatientList />
            </div>
        );
    }
}

export default ViewPatients;