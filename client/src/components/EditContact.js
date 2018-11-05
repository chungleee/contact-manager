import React, {Component} from 'react'
import axios from 'axios'
import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';
import isEmpty from 'is-empty'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {name, email, phone} = res.data
    this.setState({
      name, 
      email, 
      phone
    })
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
    const { id } = this.props.match.params

    // // check for errors
    const { errors, isValid } = this.validateFields(this.state)

    if(!isValid) {
      this.setState({ errors })
      return
    }

    const updateContact = {
      name, 
      email, 
      phone
    }

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)

    dispatch({type: 'UPDATE_CONTACT', payload: res.data })


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
                <div className="card-header">Edit Contact</div>
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
                    >Update Contact</button>
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

export default EditContact