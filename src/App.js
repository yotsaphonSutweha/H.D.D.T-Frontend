import React, { Component } from 'react';
import './App.css';
import Registration from './components/Pages/Registration';
import ViewPatients from './components/Pages/ViewPatients';
import LoggedIn from './components/LoggedIn';
import Login from './components/Pages/LogIn';
import ViewPatient from './components/Pages/ViewPatient';
import DiagnosePatient from './components/Pages/DiagnosePatient';
import ConditionVisualisation from './components/Pages/ConditionVisualisation';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route path="/register" render={props => (
            <React.Fragment>
               <Registration />
            </React.Fragment>
          )}/>
          <Route path="/loggedIn" render={props => (
            <React.Fragment>
               <LoggedIn />
            </React.Fragment>
          )}/>
          <Route path="/login" render={props => (
            <React.Fragment>
              <Login />
            </React.Fragment>
          )}/>
          <Route path="/patients" render={props => (
            <React.Fragment>
              <ViewPatients />
            </React.Fragment>
          )}/>
          <Route path="/patient" render={(props) => (
              <ViewPatient locationSearch={props.location.search} /> 
          )}/>
           <Route path="/condition-visualisation" render={(props) => (
              <ConditionVisualisation locationSearch={props.location.search} /> 
          )}/>
          <Route path="/diagnose-patient" render={(props) => (
            <DiagnosePatient />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
