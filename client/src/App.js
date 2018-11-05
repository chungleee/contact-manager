import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

import { Provider } from './context'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding='Contact Manager' />
            <div className="container">
              <Switch>
                <Route 
                  exact 
                  path='/' 
                  component={ContactList}
                />
                <Route 
                  exact
                  path='/contact/add'
                  component={AddContact}
                />
                <Route 
                  exact
                  path='/contact/edit/:id'
                  component={EditContact}
                />
                <Route
                  exact
                  path='/about'
                  component={About}
                />
                <Route 
                  exact
                  path='/test'
                  component={Test}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
