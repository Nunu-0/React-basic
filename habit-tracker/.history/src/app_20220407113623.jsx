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
    allCnt: 0,
    }

    handleIncrement = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count++;
      this.setState({habits});//{key:배열}
    };

    handleDecrement = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({habits});//{key:배열}
    };

  handleDelet = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };


  render() {
    return(
      <>
        <Navbar/>
        <Input/>
        <Habits key={habit.id} habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelet={this.handleDelet}/>
        <button className="reset-btn">Reset All</button>
      </>
    );
  }
}

export default App;
