import React, {Component} from 'react'
import axios from 'axios'
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

  validateFields = ({name, email, phone}) => {
    let errors = {}

    if(isEmpty(name)) {
      errors.name = 'Name is required'
    }

    if(isEmpty(email)) {
      errors.email = 'Email is required'
    }

    if(isEmpty(phone)) {
      errors.phone = 'Phone is required'
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
  
  onSubmitHandler = async (dispatch, event) => {
    // prevent default refresh on submission
    event.preventDefault()

    // destructuring
    const { name, email, phone } = this.state

    // // check for errors
    const { errors, isValid } = this.validateFields(this.state)

    if(!isValid) {
      this.setState({ errors })
      return
    }

    // construct new contact
    const newContact = { name, email, phone }

    // post req
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    dispatch({type: 'ADD_CONTACT', payload: res.data})
    // dispatch 

    // clear input fields
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    // redirect to home
    this.props.history.push('/')
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