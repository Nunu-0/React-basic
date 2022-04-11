import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        
        return (
            <nav className='nav'>
                <i className="nav-logo fas fa-leaf"></i>
                <span className="nav-title">Habit Tracker</span>
                <span className="nav-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;