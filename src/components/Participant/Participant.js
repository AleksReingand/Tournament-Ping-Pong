import React, { Component } from 'react';
import './Participant.scss';

class Participant extends Component {
    render() {
        return (
            <article className="participant">
                <div>
                    <img 
                    src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg"
                    alt=""/>
                    <span className="close-btn">
                        <i class="fa fa-window-close" aria-hidden="true" />
                    </span>
                </div>
                <div className="participant-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5> info{" "}
                         <span>
                            <i className="fa fa-caret-square-down" />
                        </span>
                    </h5>
                    <p>
                        description
                    </p>
                </div>
            </article>
        );
    }
}

export default Participant;