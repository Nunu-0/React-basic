import React, { Component } from 'react';

class HabbitAddForm extends Component {
    render() {
        return (
            <form className='add-form'>
                <input className='add-input' type="text" placeholder = "Habit"/>
                <button className="add-btn">add</button>
            </form>
        );
    }
}

export default HabbitAddForm;