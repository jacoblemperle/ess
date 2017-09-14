import React, { Component } from 'react';
import './styles/App.css';
import UserBar from './components/UserBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="header-bar"></nav>
          <div className="sidebar-nav"></div>
          <div className="main-content">
              <div className="top-section">
                  <UserBar />
                  <UserBar />
              </div>
              <div className="bottom-section">

              </div>
          </div>
      </div>
    );
  }
}

export default App;
