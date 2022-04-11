import React, { Component } from 'react';
import HabbitAddForm from './habbitAddForm';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <>
            <HabbitAddForm/>
            <ul>
                {this.props.habits.map(habit => (
                    <Habit key={habit.id} habit={habit}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    onDelet={this.props.onDelet}/>
                    ))}
            </ul>
            </>
        );
    }
}

export default Habits;