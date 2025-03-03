import { gql } from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query getCategory {
    categories {
       name
       documentId
    }
  }
`;
