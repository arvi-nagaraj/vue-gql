import { graphql } from '../generated/gql';

export const GET_ALL_ITEMS_QUERY = graphql(`
  query getAllItems {
    getAllItems {
      id
      title
      description
      price
      thumbnail
    }
  }
`);
