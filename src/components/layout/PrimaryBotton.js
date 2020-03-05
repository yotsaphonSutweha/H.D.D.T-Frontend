import React, { Component } from 'react'

class PrimaryButton extends Component {
    render () {
        return (
        <button type="submit" className="btn btn-primary button">{this.props.name}</button>
            );
        }
    };

export default PrimaryButton;