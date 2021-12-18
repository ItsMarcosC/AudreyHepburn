// Import React and CSS
import React from 'react';

const FilterMenu = ({ setFilter }) => {
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
