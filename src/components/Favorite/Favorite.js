import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ favAmount, viewAllFavs }) => {
  return (
    <div className="Favorites">
      <button onClick={viewAllFavs}>View Favorites
        <span className="count">{favAmount}</span>
      </button>
    </div>
  )
}

Favorite.propTypes = {
  currCards: PropTypes.string.isRequired,
  favAmount: PropTypes.number.isRequired
}

export default Favorite;
