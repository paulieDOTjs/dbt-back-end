import { authors, books } from "../../models/booksDB";

export const authorsResolve = {
  Query: {
    authors: (_: any, args: any) => {
      return authors.filter((auth: any) => {
        return args.name ? auth.name.includes(args.name) : authors;
      });
    },
  },

  Author: {
    id: (author: any) => author.authorId,
    books: (author: any) =>
      books.filter((book: any) => book.authorId === author.authorId),
  },
};
