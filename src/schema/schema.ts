import { createSchema } from "graphql-yoga";
import { readFileSync } from "node:fs";

const typeDefs = readFileSync("./graphql/schema.graphql", "utf8");

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

export const schema = createSchema({ typeDefs, resolvers });
