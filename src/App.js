import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ParticipantList from './components/ParticipantList/ParticipantList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import AddParticipant from './components/AddParticipant/AddParticipant';
import photo from './components/photoAleks.jpg';

class App extends Component {

  state = {
    participants: [],
    id: uuid(),
    name: "",
    photo: photo,
    editName: false
  };

    componentDidMount() {

    }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: this.state.id,
      name: this.state.name,
      photo: this.state.photo
    };

    const updatedParticipant = [...this.state.participants, newParticipant];

    this.setState({
      participants: updatedParticipant,
      name: "",
      id: uuid(),
      editName: false
    })
  };

  handleDelete = (id) => {
    console.log("delete participant");
    const filteredParticipant = this.state.participants.filter(participant => participant.id !== id);
    this.setState({
      participants : filteredParticipant
    })
  };

  render() {
    return (
      <main className="card card-body">
        <Navbar/>
        <AddParticipant participant={this.state.name}
                        participant={this.state.photo}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
        />
        <ParticipantList participants={this.state.participants} handleDelete={this.handleDelete}/>
      </main>
    );
  }
}

export default App;
