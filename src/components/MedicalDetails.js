import React, { Component } from 'react'

class MedicalDetails extends Component {
    render () {
        return (
           <div >
               <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="age">Age</label>
                        <input type="text" className="form-control" name="age" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="gender">Gender</label>
                        <select className="form-control" name="sex" required>
                            <option selected>Choose...</option>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="thal">Thal</label>
                        <input type="text" className="form-control" name="chol" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="thalach">Thalach</label>
                        <input type="text" className="form-control" name="thalach" required></input>
                    </div>
               </div>
               
               <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="exang">Exang</label>
                        <select className="form-control" name="exang" required>
                            <option selected>Choose...</option>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="fbs">Fbs</label>
                        <select className="form-control" name="fbs" required>
                            <option selected>Choose...</option>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="oldpeak">Oldpeak</label>
                        <select className="form-control" name="oldpeak" required>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="restecg">Restecg</label>
                        <select className="form-control" name="restecg" required>
                            <option selected>Choose...</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
               </div>
               <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="ca">CA</label>
                        <select className="form-control" name="ca" required>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="slope">Slope</label>
                        <select className="form-control" name="slope" required>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="thal">Thal</label>
                        <select className="form-control" name="thal" required>
                            <option selected>Choose...</option>
                            <option>3</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="cp">CP</label>
                        <select className="form-control" name="cp" required>
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
               </div>
               <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="trestbps">Trestbps</label>
                        <input type="text" className="form-control" name="trestbps" required></input>
                    </div>
               </div>
           </div>
        );
    }
}

export default MedicalDetails