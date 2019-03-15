import { fetchAnything } from './fetchAnything.js';


const cleanPeople = (data) => {
  const cleanData = data.map(person => {
    return {
      id: Date.now(),
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
      .then(data => ({ ...person, language: data.language, species: data.name }))
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


export { cleanPeople, getSpecies, getHomeworld }
