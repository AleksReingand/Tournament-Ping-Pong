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
                    <Signature/>
                </div>
                <button type="submit" className="btn btn-lg btn-primary mt-3 d-block mx-auto text-capitalize">add to list</button>
            </div>
        );
    }
}

export default AddParticipant;