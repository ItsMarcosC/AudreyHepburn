// Import React and CSS
import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyBooks from '../data/data_books_about';
import Book from '../components/Book';

const Books = ({loginStatus}) => {
  const { booksAboutAudrey } = AudreyBooks;
  
  switch (loginStatus) {
    case false:
      return <Redirect to='/login' />
    default:
      return (
        booksAboutAudrey.map((book) => ( 
          <Book 
            key={book.id}
            book={book}
          />
        ))
      ); 
  } 
}

const mapStateToProps = (state) => ({
  loginStatus: state.login.isLogged,
});

export default connect(mapStateToProps)(Books);
