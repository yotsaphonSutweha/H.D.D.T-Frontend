import React, { Component } from 'react'

class PrimaryButton extends Component {
    render () {
        return (
        <button type="submit" className="btn btn-primary">{this.props.name}</button>
            );
        }
    };

export default PrimaryButton;