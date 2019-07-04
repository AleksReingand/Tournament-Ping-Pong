import React, { Component } from 'react';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';

class ParticipantList extends Component {
    state={
        partisipants:[]
    }
    render() {
        return (
            <section className="participantList">
                <Participant />
                <Participant />
            </section>
        );
    }
}

export default ParticipantList;