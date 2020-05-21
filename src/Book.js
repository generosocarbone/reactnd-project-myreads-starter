import React, {Component} from 'react'

class Book extends Component {

  render() {

    const {imageLinks} = this.props.book
    const {book} = this.props

    const bookStyle = {
      width: 128,
      height: 193,
      backgroundImage: 'url("'+imageLinks.smallThumbnail+'")'
    }

    return(
      <div className="book">
        {console.log(imageLinks)}
        <div className="book-top">
          <div className="book-cover" style={bookStyle}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    )
  }
}

export default Book;