import React, {Component} from 'react'
import uuid from 'uuid'
import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';
import isEmpty from 'is-empty'

class AddContact1 extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  onSubmitHandler = (dispatch, event) => {
    // prevent default refresh on submission
    event.preventDefault()

    // destructuring
    const { name, email, phone } = this.state

    // check for errors
    if(isEmpty(name)) {
      this.setState({
        errors: { name: 'Name is required'}
      })
      return
    }
    if(isEmpty(email)) {
      this.setState({
        errors: { email: 'Email is required'}
      })
      return
    }
    if(isEmpty(phone)) {
      this.setState({
        errors: { phone: 'Phone is required'}
      })
      return
    }

    // construct new contact
    const newContact = { id: uuid(), name, email, phone }

    // dispatch 
    dispatch({type: 'ADD_CONTACT', payload: newContact})

    // clear input fields
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
  }

  render() {
    const {name, email, phone, errors} = this.state

    return (
      <Consumer>
        {
          (value) => {
            const { dispatch } = value
            return (
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                    <TextInputGroup
                      label='Name'
                      name='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={this.onChangeHandler}
                      error={errors.name}
                    />
                    <TextInputGroup
                      type='email'
                      label='Email'
                      name='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={this.onChangeHandler}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label='Phone'
                      name='phone'
                      placeholder='Enter phone'
                      value={phone}
                      onChange={this.onChangeHandler}
                      error={errors.phone}
                    />
                    <button 
                      className='btn btn-block' 
                      type="submit"
                    >Add Contact</button>
                  </form>
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default AddContact1