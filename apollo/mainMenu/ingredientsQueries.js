import { gql } from 'graphql-tag';

export const GET_INGREDIANTS = gql`
query getIngredients {
  ingredients {
    title
    maintext
    image {
      url
    }
    footerText
  }
}
`;
  