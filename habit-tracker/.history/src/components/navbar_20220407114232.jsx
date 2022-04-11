import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const {name, count} = this.props.habit;
        return (
            <nav className='nav'>
                <i className="nav-logo fas fa-leaf"></i>
                <span className="nav-title">Habit Tracker</span>
                <span className="nav-count">0</span>
            </nav>
        );
    }
}

export default Navbar;