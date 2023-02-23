export interface IBook {
  key?: string;
  type?: string;
  seed?: string[];
  title: string;
  title_suggest: string;
  edition_count: number;
  edition_key?: string[];
  publish_date?: string[];
  publish_year?: number[];
  first_publish_year?: number;
  number_of_pages_median?: number;
  isbn?: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: string;
  has_fulltext: boolean;
  public_scan_b: boolean;
  publisher?: string[];
  language?: string[];
  author_key?: string[];
  author_name?: string[];
  publisher_facet?: string[];
  _version_: number;
  author_facet?: string[];
}
export interface ISolution {
  books: IBook[];
  setBooks: (books: IBook[]) => void;
  fetchBooks: (newSearchTerm: string) => Promise<void>;
  sortByYear: (books: IBook[]) => void;
  sortByRelevance: (searchTerm: string) => void;
}

export interface IBookProps {
  title: string | undefined;
  author: string | undefined;
  year: number | undefined;
  pages: number | undefined;
  isbn?: string | undefined;
}

export interface ISearchProps {
  fetchBooks: (newSearchTerm: string) => Promise<void>;
  books: IBook[];
  setBooks: (books: IBook[]) => void;
  sortByYear: (books: IBook[]) => void;
  sortByRelevance: (searchTerm: string) => void;
}
