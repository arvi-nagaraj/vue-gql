import items from "../dataset/items.mjs";
import todos from "../dataset/todos.mjs";

const Resolvers = {
  Query: {
    getAllItems: () => items.products,
    getAllTodos: () => todos.todos,
    getItemById: (_: any, args: any) => {
      return items.products.find((items) => items.id === args.id);
    },
  },
};
export default Resolvers;
