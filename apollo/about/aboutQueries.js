import { gql } from 'graphql-tag';

export const GET_ABOUT = gql`
query getAbout {
  heroes {
    aboutusImage {
      url
    }
    abouttext
    descriptionAbout
  }
}
`;
