import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './reducers';

import './style/colours.css';
import './style/base.css';
import './style/helpers.css';
import Demo from './Demo';

interface Props {};

interface State {}

class App extends Component<Props, State> {


  render() {

    return (
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Demo />
        </div>
      </Provider>
    );
  }
}


export default App;