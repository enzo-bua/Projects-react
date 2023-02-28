import React from 'react'
import './index.css'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'
export const UserForm = ({ onSubmit, title, error, disabled }) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDedault()
    onSubmit({ 
      email: email.value, 
      password: password.value 
    })
  }
  
  return ( 
    <React.Fragment>
      <h2>{title}</h2>
      <form disabled={disabled} onSubmit={handleSubmit}>
        {/* REST OPERATOR: {...email} , usa todas las propiedades, el value y onChange */}
        <input disabled={disabled} placeholder='Email' {...email} />
        <input disabled={disabled} placeholder='Email' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </form>
      {error && <span>{error}</span>}
    </React.Fragment>
  )
}