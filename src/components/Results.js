import React, { Component } from 'react'

class Results extends Component {
    render () {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Patient's Diagnostic Result
                    </div> 
                    <div className="card-body">
                        <h5 className="card-title">
                            Diagnostic Accuracy
                        </h5>
                        <p class="card-text">{this.props.diagnosticResult.accuracy}</p>
                        <h5 className="card-title">
                            Diagnostic Result
                        </h5>
                        <p class="card-text">{this.props.diagnosticResult.prediction}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;