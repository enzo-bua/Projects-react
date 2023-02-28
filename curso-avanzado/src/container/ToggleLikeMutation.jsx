import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <useMutation mutation={LIKE_PHOTO}>
      {children}
    </useMutation>
  )
}