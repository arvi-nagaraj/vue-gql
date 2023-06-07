import items from "../dataset/items.mjs";

const Resolvers = {
  Query: {
    getAllItems: () => items,
    getItemById: (_: any, args: any) => {
      return items.find((items) => items.id === args.id);
    },
  },
};
export default Resolvers;
