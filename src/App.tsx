import { useApp } from './context';
import { BookComponent, SearchComponent } from './components';

function App() {
  const { books, fetchBooks, sortByYear, setBooks } = useApp();

  return (
    <div className='App'>
      <div className='input'>
        <SearchComponent
          fetchBooks={fetchBooks}
          books={books}
          setBooks={setBooks}
          sortByYear={sortByYear}
        />
      </div>
      <div className='book'>
        {books.map((book) => (
          <div key={book.key} className='books'>
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
