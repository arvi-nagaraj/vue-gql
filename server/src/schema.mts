const Schema = `#graphql
  type Item {
    id: ID!
    name: String
    title: String,
    description: String,
    price: Int,
    discountPercentage: Float,
    rating: Float,
    stock: Int,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
  }
  type Todo {
    id: ID!,
    todo: String,
    completed: Boolean,
    userId: Int,
  }
  type Query {
    getAllItems: [Item] #will return multiple Item instances
    getAllTodos: [Todo]
    getItemById(id: Int): Item #has an argument of 'id' of type Integer.
  }
`;

export default Schema;
