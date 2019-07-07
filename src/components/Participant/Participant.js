import React, {Component} from 'react';
import './Participant.scss';

class Participant extends Component {

    render() {
        const {firstName, lastName, photo, avatar, level} = this.props.participant;
        //const name = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
            // <div className="participant">
            //     <div>
            //         <img 
            //         src={photo}
            //         alt=""/>
            //         <span className="close-btn">
            //             <i class="fa fa-window-close" aria-hidden="true" />
            //         </span>
            //     </div>
            //     <div className="participant-info">
            //         <h3>{firstName + " " + lastName}</h3>
            //         <div className="participant-avatar">
            //             <img src={avatar} alt=""/>
            //         </div>
            //         <h4>{level}</h4>
            //     </div>
            // </div>
        );
    }
}

export default Participant;