import React, { Component } from 'react'
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class MyReads extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => (
      this.setState((currentState) => ({books: currentState.books.concat(...books)}))
    ))
  }

  render() {

    const { books } = this.state;

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
              currently={books.filter(b => b.shelf === 'currentlyReading')}/>
            <BookShelf
              key='wantToRead'
              name='Want to Read'
              currently={books.filter(b => b.shelf === 'wantToRead')}/>
            <BookShelf
              key='read'
              name='Read'
              currently={books.filter(b => b.shelf === 'read')}/>
          </div>
        </div>

        <Link className="open-search" to="/search">Add a book</Link>
      </div>
    )
  }
}

export default MyReads;