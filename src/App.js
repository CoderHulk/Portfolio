import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Main from './containers/Main';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1800,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#d5008f",
        blur: 5
      }
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <div>
          <Main />
          

        </div>
      </div>
    );
  }
}

export default App;
