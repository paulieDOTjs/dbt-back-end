import { authors, books } from "../../models/booksDB";

export const booksResolve = {
  Query: {
    books: (_: any, args: any) => {
      return books.filter((book: any) => {
        return args.searchTitle ? book.title.includes(args.searchTitle) : books;
      });
    },
  },
  Book: {
    author: (book: any) =>
      authors.find((auth: any) => auth.authorId === book.authorId) || null,
  },
};
