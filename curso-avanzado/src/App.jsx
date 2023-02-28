import React, { Suspense, useContext } from 'react'
import './App.css'
import logo from './img/Petgram.png'
import { Router, Link, Redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

function App() {

  const { isAuth } = useContext(Context)

  return (
     <Suspense fallback={<div/>}>
      <Link to="/">
        <img className='logo' src={logo} alt="" />
      </Link>
      <Router>
        <NotFound default />
        <Home path='/'/>
        <Home path='/pet/:id'/> 
        <Detail path='/detail/:detailId'/>
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect from='/favs' to='/login'/>}
        {!isAuth && <Redirect from='/user' to='/login'/>}
        {isAuth && <Redirect from='/login' to='/home'/>}
        <Favs path='/favs'/>
        <User path='/user'/>
      </Router>
      <NavBar/>
    </Suspense>
  )
}

export default App