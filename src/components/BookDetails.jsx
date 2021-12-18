// Import React and CSS
import React from 'react';

// Import Components and Pages

const BookDetails = ({id, media, title, cover, releaseYear, author, pages, summary, link, ISBN, favorites, setFavorites, toggleRenderDetails}) => {
  
  const handleClick = () => {
    toggleRenderDetails(false);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, {key: value, media: media, title: title} 
      ])
    } else {
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt="" />
      <h3>{author}</h3>
      <h3>{releaseYear}</h3>
      <h3>{pages}</h3>
      <h3>{summary}</h3>
      <h3>{ISBN}</h3>
      <h3>{link}</h3>
      <button type='button' onClick={handleClick} value={id} >Hide Details</button>
      <button type='button' onClick={handleFavorites} value={id} >Favorite</button>
    </div>
  );
}

export default BookDetails;
