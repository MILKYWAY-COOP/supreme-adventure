import { useState } from 'react';
import { IBook } from '../types';

// import { data } from 'data';

export const GetBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async (newSearchTerm: string) => {
    try {
      const sanitizedSearchTerm = newSearchTerm.trim().replace(/\s+/g, '+');
      const url = `https://openlibrary.org/search.json?q=${sanitizedSearchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.docs);
      // console.log(newSearchTerm);
      // setBooks(data.docs);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  const sortByYear = (books: IBook[]) => {
    // Create a copy of the books array to avoid mutating the state directly
    const sortedBooks = Array.from(books).sort(
      (bookA, bookB) =>
        // Sort the books based on their first publish year, with books with a lower year value coming before books
        // with a higher year value. If either bookA or bookB does not have a first_publish_year property, default to 0.
        (bookA?.first_publish_year ?? 0) - (bookB?.first_publish_year ?? 0)
    );

    // Update the state with the sorted books array
    setBooks(sortedBooks);
  };

  const sortByRelevance = (searchTerm: string) => {
    // Create a copy of the books array to avoid mutating the state directly
    const sortedBooks = Array.from(books).sort((bookA, bookB) => {
      // Convert the book titles and search term to lowercase to perform case-insensitive comparisons
      const titleA = bookA.title.toLowerCase();
      const titleB = bookB.title.toLowerCase();
      const search = searchTerm.toLowerCase();

      // If the title of bookA exactly matches the search term, it should be placed before bookB
      if (titleA === search) return -1;
      // If the title of bookB exactly matches the search term, it should be placed before bookA
      if (titleB === search) return 1;

      // If neither book's title exactly matches the search term, calculate the "distance" between the search term
      // and each book's title, and sort the books based on that distance.
      // The "distance" is the absolute difference between the index of the first occurrence of the search term in the
      // book title and the length of the title (i.e., the number of characters in the title).
      // The idea is that books whose title contains the search term closer to the end of the title should be placed
      // before books whose title contains the search term closer to the beginning of the title.
      const distanceA = Math.abs(titleA.indexOf(search) - titleA.length);
      const distanceB = Math.abs(titleB.indexOf(search) - titleB.length);
      return distanceA - distanceB;
    });

    // Update the state with the sorted books array
    setBooks(sortedBooks);
  };

  return {
    books,
    fetchBooks,
    setBooks,
    sortByYear,
    sortByRelevance
  };
};
