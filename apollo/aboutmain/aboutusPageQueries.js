import { gql } from 'graphql-tag';

export const GET_ABOUTUS_PAGE = gql`
  query getAbout {
    aboutuspages {
    burgerphoto {
        url
      }
      herophoto {
        url
      }
      ownerphoto {
        url
      }
      text
      ownername
      description
    }
  }
`;
