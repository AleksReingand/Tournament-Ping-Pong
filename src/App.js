import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ParticipantList from './components/ParticipantList/ParticipantList'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <ParticipantList />
      </main>
    );
  }
}

export default App;
