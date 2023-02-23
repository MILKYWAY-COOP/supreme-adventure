import { useState } from 'react';
import { ISearchProps } from 'types';

import Styles from './styles.module.scss';

export default function Search({
  fetchBooks,
  books,
  // setBooks,
  sortByYear
}: ISearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setTimeout(() => {
      fetchBooks(newSearchTerm);
      console.log('searching');
    }, 500);
    setSearchTerm(newSearchTerm);
  };

  const handleSortByRelevance = () => {
    // const sortedBooks = sortByRelevance(books);
    // setBooks(sortedBooks);
  };

  const handleSortByYear = () => {
    sortByYear(books);
  };

  return (
    <div className={Styles.container}>
      <input
        type='text'
        placeholder='Search'
        onChange={handleSearchInput}
        value={searchTerm}
      />
      <button onClick={handleSortByRelevance}>Sort by Relevance</button>
      <button onClick={handleSortByYear}>Sort by Year</button>
    </div>
  );
}
