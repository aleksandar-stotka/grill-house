import { gql } from 'graphql-tag';

export const GET_HERO = gql`
  query getHero {
    heroes {
    skarahouse
      description
      Grill
      heroImage {
        url
      }
    }
  }
`;
