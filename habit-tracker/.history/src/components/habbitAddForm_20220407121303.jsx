import React, { Component } from 'react';

class HabbitAddForm extends Component {
    onSubmit = event =>{
        event.preventDefault();
    }
    render() {
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input className='add-input' type="text" placeholder = "Habit"/>
                <button className="add-btn">Add</button>
            </form>
        );
    }
}

export default HabbitAddForm;