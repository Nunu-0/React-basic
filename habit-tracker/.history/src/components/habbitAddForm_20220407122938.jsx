import React, { Component } from 'react';

class HabbitAddForm extends Component {
    inputRef = React.createRef();
    onSubmit = event =>{
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        THIS.inputRef.current.value = '';
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