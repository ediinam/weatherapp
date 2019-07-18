import React, { Component } from 'react';
import Weather from './containers/Weather/Weather';
import './App.css';

class App extends Component {
  state = { loading: false };

  render() {
      return (
        <div className="App">
          <Weather/>
          </div>
      );
  }
}

export default App;
