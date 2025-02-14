// /src/graphql/heroQueries.js

import { gql } from 'graphql-tag';

export const GET_HERO = gql`
  query getHero {
    heroes {
      Grll
      heroImage {
        url
      }
    }
  }
`;
