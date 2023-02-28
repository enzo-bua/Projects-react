import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <button 
     disabled={disabled} 
     onClick={onClick}
    >
      {children}
    </button>
  )
}

SubmitButton.PropTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
