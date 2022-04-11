import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <div className="habits">
                <HabbitAddFrom onAdd = {this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelet={this.handleDelet}/>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Habits;