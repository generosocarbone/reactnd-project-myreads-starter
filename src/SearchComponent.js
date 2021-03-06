import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchComponent extends Component{

  state = {
    query: []
  }

  updateQuery = (items) => {
    this.setState(() => ({
      query: items
    }))
  }

  submitQuery = (event) => (
    BooksAPI.search(event.target.value)
      .then(response  => response.error ? this.updateQuery([]) : this.updateQuery(response))
      .catch(error => this.updateQuery([]))
  )

  render() {
    const {query} = this.state;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={this.submitQuery}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query.map(b => (<li key={b.id}><Book book={b} update={this.props.onUpdateBook} /></li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchComponent