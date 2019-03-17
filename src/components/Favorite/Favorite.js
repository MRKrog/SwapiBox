import React from 'react';

const Favorite = ({ favAmount, viewAllFavs }) => {
  return (
    <div className="Favorites">
      <button onClick={viewAllFavs}>View Favorites
        <span className="count">{favAmount}</span>
      </button>
    </div>
  )
}

export default Favorite;
