import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ParticipantList from './components/ParticipantList/ParticipantList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    participants: [],
    id: uuid(),
    item: "",
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: this.state.id,
      name: this.state.item
    };

    const updatedItems = [...this.state.participants, newParticipant];

    this.setState({
      participants: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  };
  render() {
    return (
      <main>
        <Navbar />
        <ParticipantList items={this.state.items}/>
      </main>
    );
  }
}

export default App;
