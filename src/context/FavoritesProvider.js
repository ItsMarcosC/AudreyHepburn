import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <main>
      <FavoritesContext.Provider value={{ favorites, setFavorites}}>
        {children}
      </FavoritesContext.Provider>
    </main>
  );
}

export default FavoritesProvider;
