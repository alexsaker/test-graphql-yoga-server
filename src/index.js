const { GraphQLServer } = require("graphql-yoga");
const users = require("../data/users.json");
const { UserResolver } = require("./resolvers");
const typeDefs = require("./schemas");
const resolvers = {
  Query: {
    getAllUsers: UserResolver.getAllUsers,
    user: UserResolver.getUser
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
