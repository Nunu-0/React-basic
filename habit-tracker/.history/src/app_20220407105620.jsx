import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';

class App extends Component {
  render() {
    return(
      <Navbar/>
      <Habits/>
    );
  }
}

export default App;
