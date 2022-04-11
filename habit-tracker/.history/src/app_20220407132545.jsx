import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
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

    handleIncrement = (habit) => {
      const habits = this.state.habits.map(item =>{
        if(item.id === habit.id){
          return {...habit, count: habit.count + 1};
        }
        return item;
      })
      this.setState({habits});//{key:배열}
    };

    handleDecrement = (habit) => {
      const habits = this.state.habits.map(item =>{
        if(item.id === habit.id){
          const count = habit.count - 1;
          return {...habit, count: count < 0? 0:count};
        }
        return item;
      })
      this.setState({habits});//{key:배열}
    };

  handleDelet = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };

  handleAdd = (name) =>{
    const habits = [...this.state.habits, {id: Date.now(), name, count:0}]; //name:{name}
    this.setState({habits});
  };
  
  handleReset = () =>{
    const habits = this.state.habits.map(habit =>{
      habit.count = 0;
      return habit;
    });
    this.setState({habits});
  };

  render() {
    return(
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count>0).length}/>
        <Habits habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelet={this.handleDelet}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}/>
      </>
    );
  }
}

export default App;
