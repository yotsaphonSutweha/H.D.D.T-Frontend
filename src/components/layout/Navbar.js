import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-link">
                        <a className="nav-link" href="/patients">Patients</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/waiting-list">Waiting List</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/diagnose-patient">Diagnose Patient</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;