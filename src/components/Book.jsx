// Import React and CSS
import React from 'react';

// Import Components and Pages
import AudreyBooks from '../data/data_books_about';

const Book = ({media, title, cover, ISBN, toggleRenderDetails, setBookOnDisplay, favorites, setFavorites}) => {
  const { booksAboutAudrey } = AudreyBooks;
  
  const handleClick = ({ target: {value} }) => {
    setBookOnDisplay(value);
    toggleRenderDetails(true);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, {key: value, media: media, info: booksAboutAudrey.filter((element) => element.ISBN === value )} 
      ])
    } else {
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} value={ISBN} >Details</button>
      <button type='button'onClick={handleFavorites} value={ISBN} >Favorite</button>
    </div>
  );
}

export default Book;
