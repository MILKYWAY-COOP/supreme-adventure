import { useState } from 'react';
import { ISearchProps } from 'types';
import debounce from 'lodash/debounce'; // import debounce from Lodash
import Styles from './styles.module.scss';

export default function Search({
  fetchBooks,
  books,
  sortByYear,
  sortByRelevance
}: ISearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    debounceFetchBooks(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  const debounceFetchBooks = debounce((searchTerm: string) => {
    fetchBooks(searchTerm);
    console.log('searching');
  }, 500);

  const handleSortByRelevance = () => {
    sortByRelevance(searchTerm);
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
