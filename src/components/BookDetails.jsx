// Import React and CSS
import React from 'react';

// Import Components and Pages

const BookDetails = ({ book, favorites, setFavorites, toggleRenderDetails}) => {
  
  const handleClick = () => {
    toggleRenderDetails(false);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, 
        { key: value, 
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
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.cover} alt="" />
      <h3>{book.author}</h3>
      <h3>{book.releaseYear}</h3>
      <h3>{book.pages}</h3>
      <h3>{book.summary}</h3>
      <h3>{book.ISBN}</h3>
      <h3>{book.link}</h3>
      <button type='button' onClick={handleClick} value={book.id} >Hide Details</button>
      <button type='button' onClick={handleFavorites} value={book.id} >Favorite</button>
    </div>
  );
}

export default BookDetails;
