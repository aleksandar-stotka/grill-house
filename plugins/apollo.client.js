// plugins/apollo.client.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Create an Apollo Client instance
  const apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: config.public.graphqlEndpoint || 'http://localhost:1337/graphql',
    }),
    cache: new InMemoryCache(),
  });

  // Provide the Apollo Client instance to the app
  nuxtApp.provide('apolloClient', apolloClient);
});
