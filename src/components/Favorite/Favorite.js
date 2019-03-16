import React from 'react';

const Favorite = ({ currFavs, viewAllFavs }) => {
  return (
    <div className="Favorites">
      <button onClick={viewAllFavs}>View Favorites <span className="count">{currFavs}</span></button>
    </div>
  )
}

export default Favorite;
