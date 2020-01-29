import React, { Component } from 'react'

class GeneralDetails extends Component {
    render () {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="first_name">First name</label>
                        <input type="text" className= "form-control" name="first_name"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="second_name">Second name</label>
                        <input type="text" className= "form-control" name="second_name"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="contact_number">Contact number</label>
                        <input type="text" className= "form-control" name="contact_number"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="address">Full address</label>
                    <input type="text" className= "form-control" name="address"></input>
                 </div>
                <div className="form-group"> 
                    <h4>Next of Kin</h4>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="next_of_kin1_first_name">First name</label>
                            <input type="text" className="form-control" name="next_of_kin1_first_name"></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="next_of_kin1_second_name">Second name</label>
                        <input type="text" className="form-control" name="next_of_kin1_second_name"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="next_of_kin2_first_name">First name</label>
                        <input type="text" className="form-control" name="next_of_kin2_first_name"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="next_of_kin2_second_name">Second name</label>
                        <input type="text" className="form-control" name="next_of_kin2_second_name"></input>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default GeneralDetails;