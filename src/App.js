import React from 'react';
import './App.css';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/register" render={props => (
          <React.Fragment>
             <Register />
          </React.Fragment>
        )}/>
        <Route path="/loggedIn" render={props => (
          <React.Fragment>
             <LoggedIn />
          </React.Fragment>
        )}/>
      </div>
    </Router>
  );
}

export default App;
