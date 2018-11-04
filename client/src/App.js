import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';

import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding='Contact Manager' />
          <div className="container">
            <ContactList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
