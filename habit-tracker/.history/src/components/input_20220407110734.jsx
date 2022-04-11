import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className='input'>
                <input type="text" placeholder = "Habit"/>
            </div>
        );
    }
}

export default Input;