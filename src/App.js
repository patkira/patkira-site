import React, { Component } from 'react';

import Nav from './components/nav';
import Profile from './components/profile';
import Work from './components/work';
import Education from './components/education';
import Achievements from './components/achievements';

class App extends Component {
  render() {
    return (
        <div className="main-content">
            <Nav />
            <Profile />
            <hr />
            <Work />
            <hr />
            <Education />
            <hr />
            <Achievements />
        </div>
    );
  }
}

export default App;