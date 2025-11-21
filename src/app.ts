import { createYoga } from "graphql-yoga";
import { connectToDatabase } from "./database";

import { createSchema } from "graphql-yoga";

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

export const schema = createSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});

export async function setupApp() {
  await connectToDatabase();

  const yoga = createYoga({
    schema,
  });

  return yoga;
}
