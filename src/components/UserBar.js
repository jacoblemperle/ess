import React, { Component } from 'react';
import '../styles/UserBar.css';

class UserBar extends Component {
    render() {
        return (
            <div className="main-section">
                <div className="section-content">
                    <div className="avatar">Hello</div>
                    <div className="role">Heather</div>
                    <div className="status-code">Watching The Floor</div>
                </div>
            </div>
        );
    }
}

export default UserBar;
