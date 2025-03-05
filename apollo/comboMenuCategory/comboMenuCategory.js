import { gql } from 'graphql-tag';

export const GET_MENU_BY_CATEGORY = gql`
  query getMenuByCategory($categoryId: ID!) {
    categories {
      name
      documentId
    }
    grillmenus(filters: { categories: { documentId: { eq: $categoryId } } }) {
      grillmenuimage {
        url
      }
      productname
      grildescription
      price
    }
  }
`;
