import React, { Component } from 'react'

class SecondaryButton extends Component {
    render () {
        return (
        <button type="submit" className="btn btn-secondary" onClick={this.props.event}>{this.props.name}</button>
            );
        }
    };

export default SecondaryButton