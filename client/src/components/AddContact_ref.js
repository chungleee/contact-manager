import React, {Component} from 'react'

class AddContact extends Component {  
  constructor(props) {
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact)
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '111-111-1111'
  }

  render() {
    const { name, email, phone } = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                name='name'
                className="form-control form-control-lg"
                placeholder='Enter name'
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name='email'
                className="form-control form-control-lg"
                placeholder='Enter email'
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="text" 
                name='phone'
                className="form-control form-control-lg"
                placeholder='Enter phone number'
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
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

export default AddContact