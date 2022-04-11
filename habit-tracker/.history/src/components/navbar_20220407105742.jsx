import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <div className="nav-logo"></div>
                <span className="nav-title">Habit Tracker</span>
                <span className="nav-count"></span>
            </div>
        );
    }
}

export default Navbar;