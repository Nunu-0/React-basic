import React, { Component } from 'react';
import HabbitAddForm from './habbitAddForm';
import Habit from './habit';

class Habits extends Component {
    handleAdd = name =>{
        this.props.onAdd(name);
    };
    render() {
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
            <button className="reset-btn" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;