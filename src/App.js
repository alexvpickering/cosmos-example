import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './Input'

class App extends Component {

  doSomething = () => {
    console.log('doing something')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input doSomething={this.doSomething}></Input>
      </div>
    );
  }
}

export default App;
