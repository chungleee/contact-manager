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
                <h1 className="display-4 mb-2">
                  <span className='text-danger'>Contact</span> List
                </h1>
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