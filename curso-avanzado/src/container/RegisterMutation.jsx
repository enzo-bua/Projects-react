import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";

const REGISTER = gql `
mutation signup($input: UserCredentials!) {
    signup (input: $input)
}
`
export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={REGISTER}>
    {children}
    </Mutation>
}
