import './App.css';
import React, {Component} from 'react';
import 'tachyons';

class App extends Component {
  render() { 
    return (
      <div className="tc">
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default App;
