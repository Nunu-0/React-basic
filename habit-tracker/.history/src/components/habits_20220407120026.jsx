import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
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