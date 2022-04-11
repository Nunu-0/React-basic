import React, { Component } from 'react';
import HabbitAddForm from './habbitAddForm';
import Habit from './habit';

class Habits extends Component {
    render() {
        handleAdd = name =>{
            this.props.onAdd(name);
        };
        
        return (
            <>
            <HabbitAddForm onAdd = {this.handleAdd}/>
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