import React, { Component } from 'react'

class LandingContent extends Component {
    render () {
        return (
            <div className="col-md-4"> 
                <img className="landing-page-images" src={this.props.imageSource} />
                <h3 className="heading">
                    {this.props.heading}
                </h3>
                <div className="underline">
                </div>
                <p className="heading">
                    {this.props.descriptions}
                </p>
            </div>
            );
        }
    };

export default LandingContent