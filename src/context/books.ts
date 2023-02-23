import { useState } from 'react';
import { IBook } from '../types';

import { data } from 'data';

export const GetBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async (newSearchTerm: string) => {
    // const sanitizedSearchTerm = newSearchTerm.trim().replace(/\s+/g, '+');
    // const url = `https://openlibrary.org/search.json?q=${sanitizedSearchTerm}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // setBooks(data.docs);
    console.log(newSearchTerm);
    setBooks(data.docs);
  };

  const sortByYear = (books: IBook[]) => {
    return books.sort(
      (bookA, bookB) =>
        (bookA?.first_publish_year ?? 0) - (bookB?.first_publish_year ?? 0)
    );
  };

  return {
    books,
    fetchBooks,
    setBooks,
    sortByYear
  };
};
