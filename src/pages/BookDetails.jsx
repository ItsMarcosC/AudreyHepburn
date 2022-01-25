import React from 'react';
import { connect } from 'react-redux';
import AudreyBooks from '../data/data_books_about';
import DisplayBook from '../components/DisplayBook';

const BookDetails = ({ onDisplay }) => {
  const { booksAboutAudrey} = AudreyBooks;
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
}

const mapStateToProps = (state) => ({
  onDisplay: state.display.onDisplay,
});

export default connect(mapStateToProps)(BookDetails);