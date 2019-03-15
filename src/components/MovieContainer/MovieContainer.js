import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { fetchAnything } from '../Fetch/fetchAnything.js';
import { cleanPeople, getSpecies, getHomeworld } from '../Fetch/fetchCleaner.js';

import PropTypes from 'prop-types';
import './MovieContainer.scss';


class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    }
  }

  handlePeopleBtn = (btnValue) => {
    const url = `https://swapi.co/api/people`;
    fetchAnything(url)
    .then(species => getSpecies(species.results))
    .then(homeworld => getHomeworld(homeworld))
    .then(data => cleanPeople(data))
    .then(people => this.setState({ people }))
  }


  handlePlanetsBtn = () => {

  }

  handleFavorite = (favId) => {
    const favCard = Object.keys(this.state).map(value => {

      console.log('value', this.state[value]);
    })



    console.log('favCard', favCard);
  }

  render() {
    const { people } = this.state;

    const displayPeople = people.map((person, index) => (
      <Card {...person}
            handleFavorite={this.handleFavorite}
            key={index}
      />
    ))

    return (
      <div className="MovieContainer">
        <div className="MovieTitle">
          <h1>SWAPI-Box</h1>
        </div>
        <div className="MovieInfoContainer">
          <section className="MovieButtons">
            <button onClick={this.handlePeopleBtn}>People</button>
            <button onClick={this.handlePlanetsBtn}>Planets</button>
            <button>Vehicles</button>
          </section>
          <section className="MovieCardContainer">
            {
              !people.length ?
              <Loader /> :
              displayPeople
            }

          </section>
        </div>
      </div>
    )
  }
}

MovieContainer.propTypes = {
  movieNumber: PropTypes.number.isRequired
}

export default MovieContainer;
