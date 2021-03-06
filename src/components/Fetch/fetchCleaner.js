import { fetchAnything } from './fetchAnything.js';

const cleanPeople = (data) => {
  const cleanData = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      language: person.language,
      population: person.population,
      category: 'people',
      favorite: false
    }
  })
  return cleanData;
}

const cleanPlanets = (data) => {
  const cleanData = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
      category: 'planets',
      favorite: false
    }
  })
  return cleanData;
}

const cleanVehicles = (data) => {
  const vehicleResults = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passenger: vehicle.passengers,
      category: 'vehicles',
      favorite: false
    }
  })
  return vehicleResults;
}

// People/Species Fetch Chain
const getSpecies = (data) => {
  const peopleResults = data.map(person => {
    return fetchAnything(person.species)
      .then(speciesData => ({ ...person, language: speciesData.language, species: speciesData.name }))
  })
  return Promise.all(peopleResults);
}

// People/Homeworld Fetch Chain
const getHomeworld = (data) => {
  const homeResults = data.map(person => {
    return fetchAnything(person.homeworld)
      .then(homeData => ({ ...person, population: homeData.population, homeworld: homeData.name }))
  })
  return Promise.all(homeResults);
}

// All Planets Fetch Chain
const getAllPlanets = (data) => {
  const planetsResults = data.map(planet => {
    return getResidents(planet.residents)
      .then(result => ({...planet, residents: result }))
  })
  return Promise.all(planetsResults);
}

// Planets/Residents Fetch Chain
const getResidents = (data) => {
  const residents = data.map(resident => {
    return fetchAnything(resident)
      .then(result => (result.name))
  })
  return Promise.all(residents)
}

export { cleanPeople, getSpecies, getHomeworld, cleanVehicles, getAllPlanets, cleanPlanets, getResidents }
