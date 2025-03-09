import { gql } from 'graphql-tag';

export const GET_MEIN_MENU = gql`
query {
  grillmenus (pagination: { limit: 100 }) { 
    documentId
    productname
    grildescription
    price
    grillmenuimage {
      url
    }
  }
}

`;
