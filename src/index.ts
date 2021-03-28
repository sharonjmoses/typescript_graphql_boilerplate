import "reflect-metadata";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";

const typeDefs = importSchema("src/schema.graphql");

const server = new GraphQLServer({ typeDefs, resolvers });


createConnection().then(() => {
  server.start(() => console.log("Server is running on localhost:4000"));
});