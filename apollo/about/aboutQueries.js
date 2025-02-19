import { gql } from 'graphql-tag';

export const GET_ABOUT = gql`
query getAbout {
  heroes {
    
    abouttext
    descriptionAbout
    aboutusImage {
      url
    }
  }
}
`;
