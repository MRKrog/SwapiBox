import React, { Component } from 'react';
import Card from '../Card/Card';
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
      allData: [],
      currArray: [],
      currCards: '',
      favAmount: 0
    }
  }

  handleLoadStart = () => {
    this.setState({
      loading: true
    })
  }

  checkData = (btnCategory) => {
    const { allData } = this.state;
    let returnValue = ''
    allData.forEach(val => {
      if(val.category === btnCategory) {
        returnValue = btnCategory
      }
    })
    return returnValue
  }

  handlePeopleBtn = (btnCategory) => {
    this.handleLoadStart()
    let categoryExists = this.checkData(btnCategory);
    if(!(categoryExists === btnCategory)){
      const url = `https://swapi.co/api/people`;
      fetchAnything(url)
      .then(peopleData => getSpecies(peopleData.results))
      .then(homeworld => getHomeworld(homeworld))
      .then(data => cleanPeople(data))
      .then(people => this.setState({ allData: [...this.state.allData, ...people], currCards: 'people' }))
      .catch(error => error.message)
    } else {
      this.setState({
        currCards: 'people'
      })
    }
  }

  handlePlanetsBtn = (btnCategory) => {
    this.handleLoadStart();
    let categoryExists = this.checkData(btnCategory);
    if(!(categoryExists === btnCategory)){
      const url = `https://swapi.co/api/planets`;
      fetchAnything(url)
      .then(allPlanets => getAllPlanets(allPlanets.results))
      .then(allData => cleanPlanets(allData))
      .then(planets => this.setState({ allData: [...this.state.allData, ...planets], currCards: 'planets' }))
      .catch(error => error.message)
    } else {
      this.setState({
        currCards: 'planets'
      })
    }
  }

  handleVehiclesBtn = (btnCategory) => {
    this.handleLoadStart();
    let categoryExists = this.checkData(btnCategory);
    if(!(categoryExists === btnCategory)){
      const url = `https://swapi.co/api/vehicles`;
      fetchAnything(url)
      .then(vehicleData => cleanVehicles(vehicleData.results))
      .then(vehicles => this.setState({ allData: [...vehicles], currCards: 'vehicles' }))
      .catch(error => error.message)
    }
    else {
      this.setState({
        currCards: 'vehicles'
      })
    }
  }

  handleFavBtn = (favName) => {
    const { allData } = this.state;
    const favIndex = allData.findIndex(card => card.name === favName);
    console.log('favName', favName);
    this.changeFav(favIndex);
    this.updateFavCount()
  }

  changeFav = (favIndex) => {
    const { allData } = this.state;
    if(!allData[favIndex].favorite) {
      allData[favIndex].favorite = true
    } else {
      allData[favIndex].favorite = false
    }
  }

  updateFavCount = () => {
    const { allData } = this.state;
    console.log('allData', allData);
    const currAmount = allData.reduce((acc, val) => {
      if(val.favorite) acc++
      return acc;
    }, 0);
    this.setState({
      favAmount: currAmount,
    })
  }

  viewAllFavs = () => {
    const cardFavs = this.state.allData.filter(card => {
      return card.favorite === true;
    })
    this.setState({
      currCards: 'favorites',
      currArray: [...cardFavs]
    })
  }

  render() {
    const { allData, currCards, currArray, favAmount, loading } = this.state;

    let btnActive = 'btnActive';
    let filterCards;

    if(currCards === 'favorites'){
      filterCards = allData.filter(data => {
        return data.favorite === true
      })
    } else {
      filterCards = allData.filter(data => {
        return data.category === currCards
      })
    }

    const cardsToDisplay = filterCards.map((info, index) => (
      <Card info={info}
            handleFavBtn={this.handleFavBtn}
            key={index}
      />
    ))

    return (
      <div className="MovieContainer">
        <div className="MovieTitle">
          <h3><img src={emblem} alt="Star Wars" /></h3>
          <h1><img src={logo} alt="Star Wars" /></h1>
          <Favorite favAmount={favAmount}
                    currCards={currCards}
                    viewAllFavs={this.viewAllFavs}
                    />
        </div>
        <div className="MovieInfoContainer">
          <section className="MovieButtons">
            <button className={currCards === 'people' ? btnActive : ''} onClick={() => this.handlePeopleBtn('people')}>People</button>
            <button className={currCards === 'planets' ? btnActive : ''} onClick={() => this.handlePlanetsBtn('planets')}>Planets</button>
            <button className={currCards === 'vehicles' ? btnActive : ''} onClick={() => this.handleVehiclesBtn('vehicles')}>Vehicles</button>
          </section>
          <section className="MovieCardContainer">
            <div className="MovieTitleDisplay"><h3>{currCards}</h3></div>
            <section className="MovieCardsDisplay">
            {
              !currCards ?
              <Loader loading={loading} /> :
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
