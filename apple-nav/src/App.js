import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Navigation} />
      </div>
    );
  }
}

export default App;
