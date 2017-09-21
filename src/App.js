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
