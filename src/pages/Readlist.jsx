// Import React and CSS
import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyReadlist from '../data/data_books_herReadlist';
import Book from '../components/Book';

const Readlist = ({loginStatus}) => {
  const { fromAudreyReadlist } = AudreyReadlist;
  
  switch (loginStatus) {
    case false:
      return <Redirect to='/login' />
    default:
      return (
        fromAudreyReadlist.map((book) => ( 
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

export default connect(mapStateToProps)(Readlist);
