import React from 'react'
import Book from './Book'

/**
 * @description Functional component used to split different shelves
 */
function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.currently.map(b => (<li key={b.id}><Book book={b} update={props.updateBook} /></li>))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf