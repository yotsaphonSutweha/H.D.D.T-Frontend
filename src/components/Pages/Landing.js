import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import LandingContent from '../layout/LandingContent';
import HeartDiagnosisImg from '../../images/clinic.png';
import PatientManagementImg from '../../images/record.png';
import VisualisationsImg from '../../images/graph.png'
class Landing extends Component {
    // Render method is used for rending HTML elements
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h1 className="heading">Heart Disease Diagnostic Tool</h1>
                    <div className="underline"></div>
                    <div className="row landing-page-content card-wrapper">
                        <LandingContent heading="Heart Disease Diagnosis" imageSource={HeartDiagnosisImg} descriptions="Determining highly accurate heart disease diagnosis based on medical data using machine learning algorithms."/>
                        <LandingContent heading="Patients Management" imageSource={PatientManagementImg} descriptions="Manage and keep the records of patient's personal and medical information."/>
                        <LandingContent heading=" Visualisations" imageSource={VisualisationsImg} descriptions="Determing patient's condition severity through the use of visualisations."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;