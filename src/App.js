import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchComponent from './SearchComponent'
import MyReads from './MyReads'

class BooksApp extends React.Component {

  state={
    currentBooks: []
  }

  /**
   * @description Update the shelf book in the database
   * @param {book} book - the book to be updated
   * @param {string} shelf - the new shelf for the book
   */
  updateBook=(book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => this.getAll())
      .catch(error => console.log(error));
  };

  /**
   * @description Downloads all the books in my shelves
   */
  getAll=() => {
    BooksAPI.getAll().then((books) => (
      this.setState(() => ({currentBooks: books}))
    ));
  };

  componentDidMount() {
    this.getAll();
  }

  render() {

    const {currentBooks}=this.state

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchComponent
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
          />
          )}
        />
        <Route
          exact path="/"
          render={() => (
            <MyReads
              books={currentBooks}
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
