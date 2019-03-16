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

const getAllPlanets = (data) => {
  const planetsResults = data.map(planet => {
    return getResidents(planet.residents)
      .then(result => ({...planet, residents: result }))
  })
  return Promise.all(planetsResults);
}

const getResidents = (data) => {
  const residents = data.map(resident => {
    return fetchAnything(resident)
      .then(result => (result.name))
  })
  return Promise.all(residents)
}

const cleanPlanets = (data) => {
  const cleanData = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
  })
  return cleanData;
}

const getNewResidents = (data) => {
console.log(data);
  const allPlanets = data.map(planetInfo => {

    const allData = Object.keys(planetInfo).map(residents => {

      if(residents === 'residents') {
        const residentResults = planetInfo[residents].map(resident => {
          return fetchAnything(resident)
            .then(data => (data.name))
        })
        return Promise.all(residentResults);
      }

    })

    return Promise.all(allData);
  })

  return Promise.all(allPlanets)
}


export { cleanPeople, getSpecies, getHomeworld, cleanVehicles, getAllPlanets, cleanPlanets }
