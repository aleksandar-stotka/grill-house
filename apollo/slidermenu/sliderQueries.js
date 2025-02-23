import { gql } from 'graphql-tag';

export const GET_HERO = gql`
 query getSlide {
 sliders {
  cardtext
  cardimage {
    url
  }
  cardprice
 }
 
}
`;
