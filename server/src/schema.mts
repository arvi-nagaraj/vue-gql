const Schema = `#graphql
  type Item {
    id: ID!
    name: String
    category: String
  }
  type Query {
    getAllItems: [Item] #will return multiple Item instances
    getItemById(id: Int): Item #has an argument of 'id' of type Integer.
  }
`;

export default Schema;
