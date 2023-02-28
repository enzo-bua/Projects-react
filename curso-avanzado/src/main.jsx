import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'
import Context from './Context'
const client = new ApolloClient({
  url: '',
  request: operation => { // se ejecuta antes de ahcer una pet al servidor
    const token = window.sessionStorage.getItem('token') //recupero el token
    const authorization = token ? `Bearer ${token}` : ''  
    operation.setContext({ 
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.request.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider>
    <ApolloProvider client>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Context.Provider>
)
