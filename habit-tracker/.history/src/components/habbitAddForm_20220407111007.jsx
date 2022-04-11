import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className='input'>
                <input className='input-text' type="text" placeholder = "Habit"/>
                <button className="input-btn">add</button>
            </div>
        );
    }
}

export default Input;