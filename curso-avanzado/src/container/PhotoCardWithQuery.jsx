import { PhotoCard } from '../components/PhotoCard'

import{ gql }from 'apollo-boost'
import{ Query }from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ data }) => {
  const { photo = {} } = data
  return <PhotoCard {...photo}/>
}
export const PhotoCardWithQuery = ({ id }) => {
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
}