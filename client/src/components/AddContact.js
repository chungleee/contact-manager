import React, {Component} from 'react'
import uuid from 'uuid'
import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';

class AddContact1 extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
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
    // construct new contact
    const newContact = { id: uuid(), name, email, phone }
    // dispatch 
    dispatch({type: 'ADD_CONTACT', payload: newContact})
    // clear input fields
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  render() {
    const {name, email, phone} = this.state

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
                    />
                    <TextInputGroup
                      type='email'
                      label='Email'
                      name='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={this.onChangeHandler}
                    />
                    <TextInputGroup
                      label='Phone'
                      name='phone'
                      placeholder='Enter phone'
                      value={phone}
                      onChange={this.onChangeHandler}
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