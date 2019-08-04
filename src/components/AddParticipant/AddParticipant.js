import React, { Component } from 'react';
import Signature from './Signature.js';
import LoadPhoto from './LoadPhoto.js';
import '../AddParticipant/AddParticipant.scss';

class AddParticipant extends Component {

    render() {
        return (
            <div className="card card-body my-3">
                <div className="load-info">
                    <LoadPhoto/>
                    <Signature handleChange={this.props.handleChange}/>
                </div>
                <button type="submit" onClick={this.props.handleSubmit} className="btn btn-lg btn-primary mt-3 d-block mx-auto text-capitalize">add to list</button>
            </div>
        );
    }
}

export default AddParticipant;