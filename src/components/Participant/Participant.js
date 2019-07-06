import React, {Component} from 'react';
import './Participant.scss';

class Participant extends Component {

    render() {
        const {firstName, lastName, photo, avatar, level} = this.props.participant;
        return (
            <div className="participant">
                <div>
                    <img 
                    src={photo}
                    alt=""/>
                    <span className="close-btn">
                        <i class="fa fa-window-close" aria-hidden="true" />
                    </span>
                </div>
                <div className="participant-info">
                    <h3>{firstName + " " + lastName}</h3>
                    <div className="participant-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <h4>{level}</h4>
                </div>
            </div>
        );
    }
}

export default Participant;