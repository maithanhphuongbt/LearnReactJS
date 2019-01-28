import React, { Component } from 'react';
import Search from './Search';
import BottomMenu from './BottomMenu';
import Explore from './Explore';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <div className="container mt-5 explore-container">
          <Explore/>
        </div>
        <BottomMenu/>
      </div>
    );
  }
}

export default App;
