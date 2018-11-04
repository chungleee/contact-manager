import React, {Component, Fragment} from 'react'
import Contact from './Contact';
import { Consumer } from '../context'

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            const {contacts} = value
            return (
              <Fragment>
                {
                  contacts.map((contact) => {
                    return <Contact
                      key={contact.id}
                      contact={contact}
                    />
                  })
                }
              </Fragment>
            )
          }
          
        }
      </Consumer>
    )
  }
}

export default ContactList