import React, { Component } from 'react'

class CancelButton extends Component {
    render() {
        return (
            <a href="/patients" className="btn btn-warning button">Cancel</a>
        );
    }
}

export default CancelButton;