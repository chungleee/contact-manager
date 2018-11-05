import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Consumer } from '../context'

class Contact extends Component {
  // state
  state = {
    showContactInfo: false
  }
  // toggle show contact info
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }
  // delete
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }
  
  render() {
    // destructuring
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {
          (value) => {
            const { dispatch } = value
            return (
              <div className='card card-body mb-3'>
                <h4>
                  {name} 
                  <i 
                    onClick={this.onShowClick} 
                    className="fas fa-sort-down"
                    style={{cursor: "pointer"}}
                  >
                  </i>
                  <i 
                    className="fas fa-times"
                    style={{cursor: "pointer", float: 'right', color: 'red'}}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  >
                  </i>
                  <Link to={`/contact/edit/${id}`}>
                    <i 
                      className="fas fa-pencil-alt" 
                      style={{
                        float: 'right', 
                        cursor: 'pointer',
                        color: 'black',
                        marginRight: '1rem'
                      }}>
                    </i>
                  </Link>
                </h4>
                {
                  showContactInfo
                    ? (
                        <ul className='list-group'>
                          <li className='list-group-item'>Email: {email}</li>
                          <li className='list-group-item'>Phone: {phone}</li>
                        </ul>
                      )
                    : null
                }
              </div>
            )
          }
          
        }
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact