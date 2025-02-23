import { gql } from 'graphql-tag';

export const GET_MENU = gql`
 query getMenu {
  menus {
    menutext
    menudescription
    menuimage {
      url
    }
  }
 
}
`;
