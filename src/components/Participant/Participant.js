import React, {Component} from 'react';
import './Participant.scss';

class Participant extends Component {

    render() {
        const {name} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

                <h6>{name}</h6>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"/>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        );
    }
}

export default Participant;