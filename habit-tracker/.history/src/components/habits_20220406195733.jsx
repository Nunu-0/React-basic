import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {name: 'Reading', count: 0},
            {name: 'Running', count: 0},
            {name: 'Codding', count: 0},
        ],
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit habit={habits}/>
                ))}
            </ul>
        );
    }
}

export default Habits;