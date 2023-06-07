import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import Schema from "./src/schema.mts";
import Resolvers from "./src/resolvers.mts";

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
});

startStandaloneServer(server).then(({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
);
