import React, { Component } from 'react';
import '../styles/UserBar.css';
import maleImage from '../assets/male-face.jpeg'

class UserBar extends Component {
    render() {
        return (
            <div className="userhelp-bar">
                <div className="userImg">
                    <img className="uImg" src={maleImage} alt=""/>
                </div>
                <div className="userName">
                    <p className="uName">Heather</p>
                    <p className="uRole">Team Lead</p>
                </div>
                <div className="userStatus">
                    <p className="uStatus">Watching Floor</p>
                </div>
            </div>
        );
    }
}

export default UserBar;
