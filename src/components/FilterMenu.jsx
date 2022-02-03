// Import React and CSS
import React, { useContext } from 'react';

// Import Components and Pages
import FavoritesContext from '../context/FavoritesContext';

const FilterMenu = () => {
  const { setFilter } = useContext(FavoritesContext)
  const handleClick = ({ target: {value} }) => {
    setFilter(value);
  }
  return (
    <div>
      <button type='button' value={'All'} onClick={handleClick} >All</button>
      <button type='button' value={'Movies'} onClick={handleClick} >Movies</button>
      <button type='button' value={'Books'} onClick={handleClick} >Books</button>
      <button type='button' value={'Readlist'} onClick={handleClick} >Readlist</button>
    </div>
  );
}

export default FilterMenu;
