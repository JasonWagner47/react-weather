import React, { Component } from 'react';

import Weather from './containers/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Weather />
      </div>
    );
  }
}

export default App;
