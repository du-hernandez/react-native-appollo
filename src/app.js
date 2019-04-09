import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import HomeScreen from './components/HomeScreem';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://spotify-graphql-server.herokuapp.com/graphql' }),
  cache: new InMemoryCache()
})

export default class app extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HomeScreen />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
