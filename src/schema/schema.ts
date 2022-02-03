import { authorDef } from "./authors/authorsDef";
import { authorsResolve } from "./authors/authorsResolve";
import { bookDef } from "./books/bookDef";
import { booksResolve } from "./books/booksResolve";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
  typeDefs: [authorDef, bookDef],
  resolvers: [authorsResolve, booksResolve],
});
