import React, { Component } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Favorite from '../Favorite/Favorite';
import Loader from '../Loader/Loader';
import logo from '../../images/starwars_logo.png';
import emblem from '../../images/star_emblem.png';



import { fetchAnything } from '../Fetch/fetchAnything.js';
import { cleanPeople, getSpecies, getHomeworld, cleanVehicles, getVehicles, getAllPlanets, cleanPlanets } from '../Fetch/fetchCleaner.js';

import PropTypes from 'prop-types';
import './MovieContainer.scss';


class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      people: [],
      planets: [],
      vehicles: [],
      currCards: '',
      favorites: [],
      currFavs: 0
    }
  }

  handleLoadStart = () => {
    this.setState({
      loading: true
    })
  }

  handlePeopleBtn = (btnValue) => {
    this.handleLoadStart()
    if(this.state.people.length === 0) {
      const url = `https://swapi.co/api/people`;
      fetchAnything(url)
      .then(peopleData => getSpecies(peopleData.results))
      .then(homeworld => getHomeworld(homeworld))
      .then(data => cleanPeople(data))
      .then(people => this.setState({ people: people, currCards: 'people' }))
      .catch(error => error.message)
    } else {
      this.setState({
        currCards: 'people'
      })
    }
  }

  handleVehiclesBtn = () => {
    this.handleLoadStart()
    if(this.state.vehicles.length === 0) {
      const url = `https://swapi.co/api/vehicles`;
      fetchAnything(url)
      .then(vehicleData => cleanVehicles(vehicleData.results))
      .then(vehicles => this.setState({ vehicles: vehicles, currCards: 'vehicles' }))
      .catch(error => error.message)
    } else {
      this.setState({
        currCards: 'vehicles'
      })
    }
  }


  handlePlanetsBtn = () => {
    this.handleLoadStart()
    if(this.state.planets.length === 0) {
      const url = `https://swapi.co/api/planets`;
      fetchAnything(url)
      .then(allPlanets => getAllPlanets(allPlanets.results))
      .then(allData => cleanPlanets(allData))
      .then(planets => this.setState({ planets: planets, currCards: 'planets' }))
      .catch(error => error.message)
    } else {
      this.setState({
        currCards: 'planets'
      })
    }
  }


  handleFavBtn = (favName, favType) => {
    const { people } = this.state;
    const favIndex = people.findIndex(card => card.name === favName);
    this.changeFav(favIndex);
    this.updateFavCount()
  }

  changeFav = (favIndex) => {
    const { people } = this.state;
    if(!people[favIndex].favorite) {
      people[favIndex].favorite = true
    } else {
      people[favIndex].favorite = false
    }
    this.setState({
      people: people
    })
  }

  updateFavCount = () => {
    const { people } = this.state;
    const currAmount = people.reduce((acc, val) => {
      if(val.favorite) acc++
      return acc;
    }, 0);
    this.setState({
      currFavs: currAmount
    })
  }

  viewAllFavs = () => {
    const { people } = this.state;
    console.log('view all favs');
    const cardFavs = people.filter(card => {
      return card.favorite === true;
    })
    this.setState({
      favorites: [...cardFavs],
      currCards: 'favorites'
    })
  }

  render() {
    const { people, vehicles, planets, favorites, currFavs, currCards } = this.state;

    let cardsToDisplay;
    console.log(vehicles);
    if(currCards === 'people') {
      cardsToDisplay = people.map((info, index) => (
        <Card info={info}
              handleFavBtn={this.handleFavBtn}
              key={index}
        />
      ))
    } else if (currCards === 'vehicles') {
      cardsToDisplay = vehicles.map((info, index) => (
        <Card info={info}
              handleFavBtn={this.handleFavBtn}
              key={index}
        />
      ))
    } else if (currCards === 'planets') {
      cardsToDisplay = planets.map((info, index) => (
        <Card info={info}
              handleFavBtn={this.handleFavBtn}
              key={index}
        />
      ))
    } else if(currCards === 'favorites') {
      cardsToDisplay = favorites.map((info, index) => (
        <Card info={info}
              handleFavBtn={this.handleFavBtn}
              key={index}
        />
      ))
    }


    return (
      <div className="MovieContainer">
        <div className="MovieTitle">
          <h3><img src={emblem} /></h3>
          <h1><img src={logo} /></h1>
          <Favorite currFavs={currFavs}
                    viewAllFavs={this.viewAllFavs}
                    />
        </div>
        <div className="MovieInfoContainer">
          <section className="MovieButtons">
            <button onClick={this.handlePeopleBtn}>People</button>
            <button onClick={this.handlePlanetsBtn}>Planets</button>
            <button onClick={this.handleVehiclesBtn}>Vehicles</button>
          </section>
          <section className="MovieCardContainer">
            <div className="MovieTitleDisplay"><h3>{currCards}</h3></div>
            <section className="MovieCardsDisplay">
            {
              !currCards ?
              <Loader loading={this.state.loading} /> :
              cardsToDisplay
            }
            </section>
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
