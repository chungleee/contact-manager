import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = ({ label, name, value, placeholder, type, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name}
        className={error ? "is-invalid form-control form-control-lg" : "form-control form-control-lg"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup