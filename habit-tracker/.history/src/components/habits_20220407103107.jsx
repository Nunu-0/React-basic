import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
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
        habits[index].count < 0 ? 0 : habits[index].count++;
        this.setState({habits});//{key:배열}
    };

    handleDelet = (habit) => {
        console.log(habit);
    };

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelet={this.handleDelet}/>
                ))}
            </ul>
        );
    }
}

export default Habits;