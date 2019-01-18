import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from './Lifecycle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:"init One",
      status2:"init Two"
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  updateState = ()=> {
    this.setState({
      status:"is updated",
      status2:"is updated status 2"
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate");
  }
  
  render() {
    console.log("render");
    console.log(this.state.status);
    console.log(this.state.status2);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={()=> this.updateState()}>Get update status</button>
          <Lifecycle status={this.state.status2}/>
        </header>
      </div>
    );
  }
}

export default App;
