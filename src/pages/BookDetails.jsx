import React from 'react';
import { connect } from 'react-redux';
import AudreyBooks from '../data/data_books_about';
import AudreyReadlist from '../data/data_books_herReadlist';
import DisplayBook from '../components/DisplayBook';

const BookDetails = ({ onDisplay, bookType }) => {
  const { booksAboutAudrey} = AudreyBooks;
  const { fromAudreyReadlist } = AudreyReadlist;
  
  if (bookType === 'book') {
    return (
      booksAboutAudrey.filter((book) => book.id === onDisplay)
      .map((book) => (
        <div key={book.id}>
          <DisplayBook 
            book={book}
          />
        </div>
      ))
    );
  } else if ( bookType === 'audreyReadlist') {
    return (
      fromAudreyReadlist.filter((book) => book.id === onDisplay)
      .map((book) => (
        <div key={book.id}>
          <DisplayBook 
            book={book}
          />
        </div>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  onDisplay: state.display.onDisplay,
  bookType: state.display.bookType,
});

export default connect(mapStateToProps)(BookDetails);
