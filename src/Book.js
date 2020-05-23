import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state = {
    shelf: 'none'
  };

  onSelectChange = (e) => {
    this.setState({shelf: e.target.value});
    this.props.update(this.props.book, e.target.value);
  };

  /**
   * @description Returns the thumbnail of the book, if any
   */
  getBackground() {
    return this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : '';
  }

  getStyle = {
    width: 128,
    height: 193,
    backgroundImage: 'url("'+ this.getBackground() +'")'
  };

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then(response => this.setState({shelf: response.shelf}));
  }

  render() {

    const {book} = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={this.getStyle}></div>
          <div className="book-shelf-changer">
            <select onChange={this.onSelectChange} value={this.state.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors[0]}
          {book.authors && book.authors.length === 2 && book.authors[1]}
        </div>
      </div>
    )
  }
}

export default Book