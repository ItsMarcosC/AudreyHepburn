// Import React and CSS
import React from 'react';

// Import Components and Pages

const Book = ({book, toggleRenderDetails, setBookOnDisplay, favorites, setFavorites}) => {
  const handleClick = ({ target: {value} }) => {
    setBookOnDisplay(value);
    toggleRenderDetails(true);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.id === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, 
        { id: value, 
        media: book.media, 
        title: book.title, 
        author: book.author, 
        releaseYear: book.releaseYear, 
        pages: book.pages, 
        summary: book.summary, 
        link: book.link, 
        ISBN: book.ISBN, 
        cover: book.cover} 
      ])
    } else {
      setFavorites(favorites.filter((element) => element.id !== value))
    }
  }

  return (
    <div>
      <img src={book.cover} alt="" />
      <h2>{book.title}</h2>
      <button type='button' onClick={handleClick} value={book.id} >Details</button>
      <button type='button'onClick={handleFavorites} value={book.id} >Favorite</button>
    </div>
  );
}

export default Book;
