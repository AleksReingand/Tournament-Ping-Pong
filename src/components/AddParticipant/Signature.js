import React, { Component } from 'react';

class Signature extends Component {


    render() {
        const { participant, handleChange, handleSubmit } = this.props;
        return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-signature"/>
                    </div>
                </div>
                <input type="text"
                        className="form-control"
                        placeholder="add yourself to the list"
                        value={participant}
                        onChange={handleChange}
                />
            </div>
        </form>
        );
    }
}

export default Signature;