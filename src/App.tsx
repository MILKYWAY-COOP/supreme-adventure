import { useEffect, useState } from 'react';

import { useApp } from './context';
import { BookComponent, SearchComponent } from './components';
import { IBook } from './types';

function App() {
  const [booksToShow, setBooksToShow] = useState<IBook[]>([]);
  const { books, fetchBooks, sortByYear, setBooks, sortByRelevance } = useApp();

  useEffect(() => {
    setBooksToShow(books);
  }, [books]);

  return (
    <div className='App'>
      <div className='input'>
        <SearchComponent
          fetchBooks={fetchBooks}
          books={books}
          setBooks={setBooks}
          sortByYear={sortByYear}
          sortByRelevance={sortByRelevance}
        />
      </div>
      <div className='book'>
        {booksToShow.map((book, index) => (
          <div key={index} className='books'>
            <BookComponent
              title={book.title}
              author={book.author_name?.[0]}
              year={book.first_publish_year}
              pages={book.number_of_pages_median}
              isbn={book.isbn?.[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
