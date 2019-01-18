import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import ConfigURL from '../router/ConfigURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Nav/>
            <ConfigURL/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
