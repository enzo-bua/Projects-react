import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <div>
      {
        favs.map(fav => 
          <Link className='link' key={fav.id} to={`/detail/${fav.id}`}> 
            <img src={fav.src} />
           </Link>
          )
      } 
    </div>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}