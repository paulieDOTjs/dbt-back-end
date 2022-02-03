import { authors, books } from "../../models/booksDB";

export const authorsResolve = {
  Query: {
    authors: (_, args) => {
      return authors.filter((auth) => {
        return args.name ? auth.name.includes(args.name) : authors;
      });
    },
  },

  Author: {
    id: (author) => author.authorId,
    books: (author) =>
      books.filter((book) => book.authorId === author.authorId),
  },
};
