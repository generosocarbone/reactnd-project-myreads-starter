import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function MyReads(props) {

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            key='currentlyReading'
            name='Currently Reading'
            updateBook={props.onUpdateBook}
            currently={props.books.filter(b => b.shelf === 'currentlyReading')}/>
          <BookShelf
            key='wantToRead'
            name='Want to Read'
            updateBook={props.onUpdateBook}
            currently={props.books.filter(b => b.shelf === 'wantToRead')}/>
          <BookShelf
            key='read'
            name='Read'
            updateBook={props.onUpdateBook}
            currently={props.books.filter(b => b.shelf === 'read')}/>
        </div>
      </div>

      <Link className="open-search" to="/search">Add a book</Link>
    </div>
  );
}

export default MyReads