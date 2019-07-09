import React, { Component } from 'react';

class AddParticipant extends Component {
    render() {
        const { participant, handleChange, handleSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i class="fas fa-camera"/>
                            </div>
                        </div>
                        <input type="text"
                               className="form-control"
                               placeholder="add yourself to the list"
                               value={participant}
                               onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary mt-3 d-block mx-auto text-capitalize">add to list</button>
                </form>
            </div>
        );
    }
}

export default AddParticipant;