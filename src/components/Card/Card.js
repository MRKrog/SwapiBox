import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ info, handleFavBtn }) => {
  return (
    <div className="Card">
      <section className="Card-Title">
        <h4>{info.name}</h4>
        <button className={info.favorite ? 'activeFav' : 'inactiveFav'}
                onClick={() => handleFavBtn(info.name)}>
          <i className="fas fa-star"></i>
        </button>
      </section>
      <section className="Card-Body">
        {info.homeworld && <p>Homeworld: <span>{info.homeworld}</span></p>}
        {info.species && <p>Species: <span>{info.species}</span></p>}
        {info.language && <p>Language: <span>{info.language}</span></p>}
        {info.population && <p>Population: <span>{info.population}</span></p>}
        {info.model && <p>Model: <span>{info.model}</span></p>}
        {info.class && <p>Class: <span>{info.class}</span></p>}
        {info.passenger && <p>Passengers: <span>{info.passenger}</span></p>}
        {info.climate && <p>Climate: <span>{info.climate}</span></p>}
        {info.terrain && <p>Species: <span>{info.terrain}</span></p>}
        {info.residents && <ul>Residents: {info.residents.map((val, i) => <li key={i}>{val}</li>) }</ul>}
      </section>
    </div>
  )
}

Card.propTypes = {

}

export default Card;
