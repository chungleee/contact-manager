import React, { Component } from 'react'

// create context
const Context = React.createContext()

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload
        })
      }
    default: 
      return state
  }
}


// Provider component
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Will Smith',
        email: 'wsmith@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Karen Williams',
        email: 'kwilliams@gmail.com',
        phone: '777-777-7777'
      },
    ],
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action)
      })
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer