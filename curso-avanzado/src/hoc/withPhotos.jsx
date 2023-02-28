import { graphql } from '@apollo/client'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryID: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const withPhotos = graphql(GET_PHOTOS)