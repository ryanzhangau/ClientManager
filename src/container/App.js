import React, { Component } from 'react';
import '../styles/App.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/login.css';
import { Route } from 'react-router-dom';
import Login from '../components/loginComponent';
import CustomerInfo from '../components/CustomerInfoComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/customer' component={CustomerInfo} />
      </div>
    );
  }
}

export default App;
