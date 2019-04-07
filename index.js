import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Counter from './Counter';
import './style.css';
import store from './Store';
import Action from './Action';

// Statefull
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count: 0
    };
  }

  getCount() {
    this.setState({
      count: store.getState()
    })
  };

  handleIncrement = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  handleDecrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };


  render() {
    return (
      <Counter count={this.state.count}
        onIncrement={this.handleIncrement()}
        onDecrement={this.handleDecrement}
      />
    );
  }
}


render(<App />, document.getElementById('root'));
