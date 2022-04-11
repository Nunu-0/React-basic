import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habit from './components/habit';
import Habits from './components/habits';

class App extends Component {
  render() {
    return(
      <>
        <Navbar/>
        <Input/>
        <Habits/>
      </Input>
    );
  }
}

export default App;
