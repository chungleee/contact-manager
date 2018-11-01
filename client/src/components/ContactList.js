import React, {Component, Fragment} from 'react'
import Contact from './Contact';

class ContactList extends Component {
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

    ]
  }

  deleteContact = (id) => {
    const { contacts } = this.state

    const newContacts = contacts.filter((contact) => {
      return contact.id !== id
    })

    this.setState({
      contacts: newContacts
    })
  }
  

  render() {
    const { contacts } = this.state
    return (
      <Fragment>
        {
          contacts.map((contact) => {
            return <Contact 
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
          })
        }
      </Fragment>
    )
  }
}

export default ContactList