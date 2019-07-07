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
            <div className="main-view">
                <div className="card card-body my-3">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"/>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="add yourself to the list"></input>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary mt-3 text-capitalize">add</button>
                    </form>
                </div>

                <section className="participantList">
                    {participants.map(participant => {
                        return(
                            <Participant key={participant.id} participant={participant} />
                        )
                    })}
                </section>
            </div>
        );
    }
}

export default ParticipantList;