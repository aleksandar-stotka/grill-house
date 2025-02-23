import { gql } from 'graphql-tag';

export const GET_SLIDES = gql`
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
