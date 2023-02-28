import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to="/"> <MdHome size={SIZE}>Home</MdHome> </Link>
      <Link to="/favs"> <MdFavoriteBorder size={SIZE}>Favs</MdFavoriteBorder> </Link>
      <Link to="/user"> <MdPersonOutline size={SIZE}>User</MdPersonOutline> </Link>
    </nav>
  )
}