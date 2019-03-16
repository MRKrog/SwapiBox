import { fetchAnything } from './fetchAnything.js';


const cleanPeople = (data) => {
  const cleanData = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      language: person.language,
      population: person.population,
      favorite: false
    }
  })
  return cleanData;
}

const getSpecies = (data) => {
  const peopleResults = data.map(person => {
    return fetchAnything(person.species)
      .then(speciesData => ({ ...person, language: speciesData.language, species: speciesData.name }))

  })

  return Promise.all(peopleResults);
}

const getHomeworld = (data) => {
  const homeResults = data.map(person => {
    return fetchAnything(person.homeworld)
      .then(data => ({ ...person, population: data.population, homeworld: data.name }))
  })
  return Promise.all(homeResults);
}


const cleanVehicles = (data) => {
  const vehicleResults = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passenger: vehicle.passengers
    }
  })
  return vehicleResults;
}

export { cleanPeople, getSpecies, getHomeworld, cleanVehicles }
