import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Input from './components/input';
import Habit from './components/habit';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
  }
  render() {
    return(
      <>
        <Navbar/>
        <Input/>
        <Habits/>
        <button className="reset-btn">Reset All</button>
      </>
    );
  }
}

export default App;