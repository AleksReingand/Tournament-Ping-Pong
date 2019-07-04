import React, { Component } from 'react';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';
import { participantData } from '../../participantData';

class ParticipantList extends Component {
    state = {
        participants: participantData
    };
    render() {
       const { participants } = this.state;

        return (
            <section className="participantList">
                {participants.map(participant => {
                    return(
                        <Participant key={participant.id} participant={participant} />
                    )
                })}
            </section>
        );
    }
}

export default ParticipantList;