import React, { Component } from 'react';
import Cookies  from 'universal-cookie';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           cookieName : ''
        };
    }

    // componentDidMount() {
    //     const cookies = new Cookies();
    //     this.setState({cookieName :  cookies.getAll()})
    // }

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
                        <a className="nav-link" href={process.env.REACT_APP_SERVER_SIDE_URL + "logout"}>Logout</a>
                    </li> 
                </ul>
            </div>
        );
    }
}

export default Navbar;