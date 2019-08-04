import React, { Component } from 'react';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';

class ParticipantList extends Component {
    render() {
       const { participants, handleDelete } = this.props;
        return (
            <div className="main-view">
                <ul className="list-group my-5">
                    <h3 className="text-center"> Participant list</h3>
                    {
                        participants.map(p => {
                            return(
                                <Participant
                                 key={p.id}
                                 name={p.name}
                                 photo={p.photo}
                                 handleDelete={() => handleDelete(p.id)}
                                 />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ParticipantList;