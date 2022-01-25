// Import React and CSS
import React, { useContext } from 'react';
import { useHistory } from "react-router";
import { connect } from 'react-redux';

// Import Components and Pages
import FavoritesContext from '../context/FavoritesContext';
import { setOnDisplay } from '../redux/actions';

const Book = ({book, onDisplay}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const history = useHistory();

  const handleClick = ({ target: {value} }) => {
    onDisplay(value);
    history.push('/bookDetails')
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

const mapDispatchToProps = (dispatch) => ({
  onDisplay:(element) => dispatch(setOnDisplay(element))
});

export default connect(null, mapDispatchToProps)(Book);
