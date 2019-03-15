import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ id, name, language, species, homeworld, population, favorite, handleFavorite }) => {
  // console.log(handleFavorite);
  const favState = favorite ? 'activeFav' : 'inactiveFav';
  return (
    <div className="Card">
      <section className="Card-Title">
        <h4>{name}</h4>
        <button onClick={() => handleFavorite(id)} className={favState}>
          <i className="fas fa-star"></i>
        </button>
      </section>
      <section className="Card-Body">
        <ul>
          <li><h5>Homeworld: <span>{homeworld}</span></h5></li>
          <li><h5>Species: <span>{species}</span></h5></li>
          <li><h5>Language: <span>{language}</span></h5></li>
          <li><h5>Population: <span>{population}</span></h5></li>
        </ul>
      </section>

    </div>
  )
}

export default Card;
