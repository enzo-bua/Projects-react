import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import Context from '../Context'

export const NotRegisteredUser = () => {

  const { activateAuth } = useContext(Context)

  return (
    <React.Fragment>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({data}) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'hay algun problema'

            return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, error, loading) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            //devuelve una promesa (.then), y autentica el usuario
            login({ variables }).then(({data}) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg = error && 'La contraseña no es correcta...'
          
          return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>

    </React.Fragment>
          

  )
}