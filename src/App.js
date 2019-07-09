import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ParticipantList from './components/ParticipantList/ParticipantList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import AddParticipant from "./components/AddParticipant/AddParticipant";

class App extends Component {
  state = {
    participants: [],
    id: uuid(),
    name: "",
    editName: false
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: this.state.id,
      name: this.state.name
    };

    const updatedParticipant = [...this.state.participants, newParticipant];

    this.setState({
      participants: updatedParticipant,
      name: "",
      id: uuid(),
      editName: false
    })
  };
  render() {
    return (
      <main className="card card-body">
        <Navbar/>
        <AddParticipant participant={this.state.name}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
        />
        <ParticipantList participants={this.state.participants}/>
      </main>
    );
  }
}

export default App;
