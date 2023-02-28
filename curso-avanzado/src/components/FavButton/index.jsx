import React from 'react'
import '../PhotoCard/index.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropType from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <button onClick={onClick}>
     <Icon size='32px'/> {likes} likes!
    </button>
  )
}


FavButton.prototype = {
  liked: PropType.bool.isRequired,
  likes: PropType.number.isRequired,
  onClick: PropType.func.isRequired 
}
