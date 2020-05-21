import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchComponent from "./SearchComponent.js"
import MyReads from "./MyReads.js"

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchComponent} />
        <Route
          exact path="/"
          component={MyReads} />
      </div>
    )
  }
}

export default BooksApp
