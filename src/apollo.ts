import { NODE_ENV, currentEnv } from "./config/nodeEnv";

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core/dist/plugin/landingPage/default";
import { schema } from "./schema/schema";

export const apollo = new ApolloServer({
  schema: schema,
  introspection: true,
  debug: currentEnv === NODE_ENV.DEV,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
  mocks: true,
  formatError: (err) => {
    if (
      err.message.startsWith("Database Error: ") &&
      currentEnv !== NODE_ENV.DEV
    ) {
      return new Error("Internal server error");
    }
    ``;

    return err;
  },
});
