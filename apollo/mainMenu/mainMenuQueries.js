import { gql } from 'graphql-tag';

export const GET_MEIN_MENU = gql`
 query getMainMenu {
    grillmenus {
      grillmenuimage {
        url
      }
      productname
      grildescription
      price
    }
     
  }
`;
