import React, { Component } from 'react';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';
import AddParticipant from "../AddParticipant/AddParticipant";

class ParticipantList extends Component {
    render() {
       const { participants } = this.state;
        return (
            <div className="main-view">
                <div className="card card-body my-3">
                    <AddParticipant/>
                </div>

                <ul className="list-group my-5">
                    <h3 className="text-center"> Participant list</h3>
                    {
                        participants.map(p => {
                            return(
                                <Participant key={p} name={p.name}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ParticipantList;