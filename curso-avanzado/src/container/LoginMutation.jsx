import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";

const LOGIN = gql `
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`
export const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN}>
    {children}
    </Mutation>
}
