import React, { Component } from 'react';

class HabbitAddForm extends Component {
    inputRef = React.createRef();
    onSubmit = event =>{
        event.preventDefault();
    }
    render() {
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input ref = {this.inputRef} className='add-input' type="text" placeholder = "Habit"/>
                <button className="add-btn">Add</button>
            </form>
        );
    }
}

export default HabbitAddForm;