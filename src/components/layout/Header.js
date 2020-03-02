import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <h3 className="heading">{this.props.title}</h3>
            );
        }
    };

export default Header