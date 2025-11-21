import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { loadConfig } from "./config";

const config = loadConfig();

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "world",
    },
  },
});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(config.port, () => {
  console.log(
    `🚀 Server running at http://${config.hostname}:${config.port}/graphql 🌐`
  );
});
