import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
//import Gallery from './components/Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Main />
 
        
      </div>
    );
  }
}

export default App;
