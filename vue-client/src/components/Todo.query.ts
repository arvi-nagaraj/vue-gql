import { graphql } from '../generated/gql';

export const GET_ALL_TODOS_QUERY = graphql(`
  query getAllTodos {
    getAllTodos {
      id
      todo
      completed
    }
  }
`);
