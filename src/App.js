import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './reducers';

import './style/colours.css';
import './style/base.css';
import './style/helpers.css';
import Demo from './Demo';

interface Props {
};

interface State {
  title: string;
}

const title1 = 'Welcome to a Sorted Table Demo';
const title2 = `I've updated the title, pray I don't have to update it again.`;

class App extends Component<Props, State> {
  state = {
    title: title1,
  };

  setTitleOne = () => {
    this.setState({ title: title1 });
  }

  setTitleTwo = () => {
    this.setState({ title: title2 });
  }

  render() {
    const { title } = this.state;
    console.log('App rendered');

    return (
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{title}</h1>
          </header>
          <div className="button-group">
            <h3>Trigger a re-render on App level</h3>
            <button className='primary' onClick={this.setTitleOne}>Title 1</button>
            <button className='primary' onClick={this.setTitleTwo}>Title 2</button>
          </div>
          <Demo  />
        </div>
      </Provider>
    );
  }
}


export default App;