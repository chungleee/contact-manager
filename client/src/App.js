import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding='Contact Manager' />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
