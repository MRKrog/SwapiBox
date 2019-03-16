import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ info, handleFavBtn }) => {
  // const favState = ;


  // let cardContent = Object.keys(props).map(content => {
  //   console.log(props[content]);
  //   return props[content]
  // })

  // {cardContent}
  // {item.homeworld && <p>Homeworld: {item.homeworld}</p>}


  return (
    <div className="Card">
      <section className="Card-Title">
        <h4>{info.name}</h4>
        <button onClick={() => handleFavBtn(info.name)} className={info.favorite ? 'activeFav' : 'inactiveFav'} >
          <i className="fas fa-star"></i>
        </button>
      </section>
      <section className="Card-Body">
        {info.homeworld && <p>Homeworld: {info.homeworld}</p>}
        {info.species && <p>Species: {info.species}</p>}
        {info.language && <p>Language: {info.language}</p>}
        {info.population && <p>Population: {info.population}</p>}
        {info.model && <p>Model: {info.model}</p>}
        {info.class && <p>Class: {info.class}</p>}
        {info.passenger && <p>Passengers: {info.passenger}</p>}
      </section>
    </div>
  )
}

Card.propTypes = {

}

export default Card;
