import React from 'react'
import Book from "./Book";

function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.currently.map(b => (<li key={b.id}><Book book={b} /></li>))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;