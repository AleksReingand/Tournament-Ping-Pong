import React, { Component } from 'react';
import './Participant.scss';

class Participant extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        const {city,img,name,info} = this.props.participant;
        return (
            <article className="participant">
                <div>
                    <img 
                    src={img}
                    alt=""/>
                    <span className="close-btn">
                        <i class="fa fa-window-close" aria-hidden="true" />
                    </span>
                </div>
                <div className="participant-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5> info{" "}
                         <span onClick={this.handleInfo}>
                            <i className="fa fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p> {info} </p>}
                </div>
            </article>
        );
    }
}

export default Participant;