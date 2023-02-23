import { IBookProps } from '../../types';

import Styles from './styles.module.scss';

export default function BookComponent({
  title,
  author,
  year,
  pages,
  isbn
}: IBookProps) {

  return (
    <div className={Styles.container}>
      <h2>{title}</h2>
      <div className={Styles.more}>
        <p>
          <span>Author:</span>
          {author}
        </p>
        <p>
          <span>Year:</span>
          {year}
        </p>
        <p className={Styles.isbn}>
          <span>ISBN:</span>
          {isbn}
        </p>
        <p>
          <span>Pages:</span>
          {pages}
        </p>
      </div>
    </div>
  );
}
