import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {client} from './'

const ApolloContextProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export {ApolloContextProvider}
