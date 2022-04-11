import React from 'react';
[]
const HabbitAddForm = (props) => (
    return (
        <form ref = {this.formRef} className='add-form' onSubmit={this.onSubmit}>
            <input ref = {this.inputRef} className='add-input' type="text" placeholder = "Habit"/>
            <button className="add-btn">Add</button>
        </form>
    );
    );

export default HabbitAddForm;