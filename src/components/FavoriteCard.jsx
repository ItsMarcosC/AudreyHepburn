// Import React and CSS
import React from 'react';

// Import Components and Pages

const FavoriteCard = ({id, media, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{media}</h2>
      <h2>{id}</h2>
    </div>
  );
}

export default FavoriteCard;
