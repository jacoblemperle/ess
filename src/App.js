import React, {Component} from 'react';
import './styles/App.css';
import UserBar from './components/UserBar';
import maleImage from './assets/male-face.jpeg'
import essLogo from './assets/Extra_Space_Storage_logo.png'
class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="header-bar">
                    <div className="header-left">
                        <img id="essLogo" src={essLogo} alt=""/>
                    </div>
                    <div className="header-right">
                        <div className="right-holder"></div>
                        <a href="www.google.com" id="logOutBtn">
                            <button className="logout-btn">Log Out</button>
                        </a>
                    </div>
                </nav>
                <div className="sidebar-nav">
                    <div className="sidebar-profile">
                        <div className="sidebar-profileContainer">
                            <img id="sidebar-profilePic" src={maleImage} alt=""/>
                            <div className="sidebar-profileInfo">
                                <p id="sidebar-profileName">Travis L</p>
                                <p id="sidebar-profileTitle">Team Peri</p>
                            </div>
                        </div>

                    </div>
                    <div className="sidebar-btns">
                        <button type="submit" className="buttonStyle">Outbound Call</button>
                        <button type="submit" className="buttonStyle">Question</button>
                        <button type="submit" className="buttonStyle">Supervisor Call</button>
                        <button type="submit" className="buttonStyle">Technical Difficulty</button>
                    </div>
                </div>
                <div className="main-content">
                    <div className="supervisor-section">
                        <UserBar />
                        <UserBar />
                    </div>
                    <div className="help-section">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
