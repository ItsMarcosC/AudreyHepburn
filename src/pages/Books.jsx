// Import React and CSS
import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyBooks from '../data/data_books_about';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';

const Books = ({isLogged, setFavorites, favorites}) => {
  const [renderDetails, toggleRenderDetails] = useState(false);
  const [bookOnDisplay, setBookOnDisplay] = useState('');
  const { booksAboutAudrey } = AudreyBooks;
  
  switch (isLogged) {
    case false:
      return <Redirect to='/login' />
    default:
      if (renderDetails === false){
        return (
          booksAboutAudrey.map((book) => ( 
            <Book 
              key={book.id}
              book={book}
              toggleRenderDetails={toggleRenderDetails}
              setBookOnDisplay={setBookOnDisplay}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        ); 
      } else {
        return (
          booksAboutAudrey.filter((book) => book.id === bookOnDisplay)
          .map((book) => (
            <BookDetails 
              key={book.id}
              book={book}
              toggleRenderDetails={toggleRenderDetails}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        );
      }
  }
}

export default Books;
