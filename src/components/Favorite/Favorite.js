import React from 'react';

const Favorite = ({ currFavs, currCards, viewAllFavs }) => {
  let btnActive = 'btnActive';

  return (
    <div className="Favorites">
      <button className={currCards === 'favorites' ? btnActive : ''}
              onClick={viewAllFavs}>View Favorites
        <span className="count">{currFavs}</span>
      </button>
    </div>
  )
}

export default Favorite;
