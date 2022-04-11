import React, { Component } from 'react';

class netbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-logo"></div>
                <span className="nav-title">Habit Tracker</span>
                <span className="nav-count"></span>
            </div>
        );
    }
}

export default netbar;