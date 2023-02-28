import React from 'react'
import { Query } from '@apollo/client'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'
const GET_FAV = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  loading && <p>Loading...</p>
  error && <p>Error!</p>
  const { favs } = data
  return <ListOfFavs favs={favs}/>
}

export const FavsWithQuery = () => {
  <Query query={GET_FAV} fetchPolicy='network-only'>
    {renderProp}
  </Query>
}