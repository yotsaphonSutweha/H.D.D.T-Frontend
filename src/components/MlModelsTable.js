import React, { Component } from 'react';

class MlModelsTable extends Component {
    constructor(props) {
        super(props);
        this.convertDiagnosticResult = this.convertDiagnosticResult.bind(this);
    }

    convertDiagnosticResult(value) {
        if (value === 1) {
            return 'Diagnosed'
        }
        return 'Undiagnosed'
    }

    render() {
      return(
          <div className="Container">
            <table className="table table-striped table-dark " id="mlModelsTable">
                <thead>
                    <tr>
                        <th scope="col">Machine Learning Model</th>
                        <th scope="col">Accuracy</th>
                        <th scope="col">Prediction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.models.perceptron.name}</td>
                        <td>{this.props.models.perceptron.accuracy}</td>
                        <td>{this.convertDiagnosticResult(this.props.models.perceptron.prediction)}</td>
                    </tr>
                    <tr>
                        <td>{this.props.models.knn.name}</td>
                        <td>{this.props.models.knn.accuracy}</td>
                        <td>{this.convertDiagnosticResult(this.props.models.knn.prediction)}</td>
                    </tr>
                    <tr>
                        <td>{this.props.models.svm.name}</td>
                        <td>{this.props.models.svm.accuracy}</td>
                        <td>{this.convertDiagnosticResult(this.props.models.svm.prediction)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
    }
}

export default MlModelsTable;