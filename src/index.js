import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'



const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache
})

client.query({
  query: gql`
  {
    files {
      id
      name
      parentFolder
    }
  }
  `
}).then(res => console.log(res))

ReactDOM.render(
  <ApolloProvider client={ client }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
