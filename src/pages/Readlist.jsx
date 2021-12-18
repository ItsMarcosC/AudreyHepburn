// Import React and CSS
import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyReadlist from '../data/data_books_herReadlist'
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';

const Readlist = ({isLogged, setFavorites, favorites}) => {
  const [renderDetails, toggleRenderDetails] = useState(false);
  const [bookOnDisplay, setBookOnDisplay] = useState('');
  const { fromAudreyReadlist } = AudreyReadlist;
  
  switch (isLogged) {
    case false:
      return <Redirect to='/login' />
    default:
      if (renderDetails === false){
        return (
          fromAudreyReadlist.map((book) => ( 
            <Book 
              key={book.id}
              id={book.id}
              ISBN={book.ISBN}
              title={book.title}
              cover={book.cover}
              media={book.media}
              toggleRenderDetails={toggleRenderDetails}
              setBookOnDisplay={setBookOnDisplay}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        ); 
      } else {
        return (
          fromAudreyReadlist.filter((book) => book.id === bookOnDisplay)
          .map((book) => (
            <BookDetails 
              key={book.id}
              id={book.id}
              title={book.title}
              cover={book.cover}
              releaseYear={book.releaseYear}
              author={book.author}
              pages={book.pages}
              summary={book.summary}
              link={book.link}
              ISBN={book.ISBN}
              media={book.media}
              toggleRenderDetails={toggleRenderDetails}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        );
      }
  }
}

export default Readlist;
