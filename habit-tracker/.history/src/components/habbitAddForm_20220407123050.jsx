import React, { Component } from 'react';

class HabbitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = event =>{
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref = {this.formRef} className='add-form' onSubmit={this.onSubmit}>
                <input ref = {this.inputRef} className='add-input' type="text" placeholder = "Habit"/>
                <button className="add-btn">Add</button>
            </form>
        );
    }
}

export default HabbitAddForm;