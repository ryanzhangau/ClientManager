import React, { Component } from 'react';
import '../styles/App.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/login.css';
import Login from '../components/loginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
