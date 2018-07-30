import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MineSweeper from './components/MineSweeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MineSweeper 2.0 (ReactJS)</h1>
        </header>
        <MineSweeper />
      </div>
    );
  }
}

export default App;
