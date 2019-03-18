import React from 'react';
import { cleanPeople, getSpecies, getHomeworld, cleanVehicles, getAllPlanets, cleanPlanets, getResidents } from './fetchCleaner.js';
import { fetchAnything } from './fetchAnything.js';
jest.mock('./fetchAnything.js');


describe('fetchCleaner', () => {
  // let url;

  beforeEach(() => {
    // url = 'www.starwars.com';
    //
    // fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //   ok: true,
    //   status: 200,
    //   json: () => Promise.resolve(),
    // }));

  });

  it("fetch call returns expected data", async () => {

  });

  it("getSpecies fetch call takes mockData data and returns updated data", async () => {
    // setup
    let mockData = [
      {
        birth_year: "19BBY",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
      }
    ]

    let speciesData = {
        language: 'Galactic',
        name: 'Luke'
    }

    let expectedData = [{
        birth_year: "19BBY",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
        language: 'Galactic',
        species: 'Luke'
      }]

    fetchAnything.mockImplementation(() => Promise.resolve(speciesData));
    // execution
    const result = await getSpecies(mockData)

    // expectation
    expect(fetchAnything).toHaveBeenCalled();
    expect(result).toEqual(expectedData);
  });

  it("getHomeworld fetch call takes mockData and returns expected data", async () => {
    // setup
    let mockData = [
      {
        birth_year: "19BBY",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
      }
    ]

    let homeworldData = {
        name: 'Tatooine',
        population: 20000
    }

    let expectedHomeworld = [{
        birth_year: "19BBY",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        eye_color: "blue",
        homeworld: 'Tatooine',
        population: 20000
      }]

      fetchAnything.mockImplementation(() => Promise.resolve(homeworldData));
      // execution
      const result = await getHomeworld(mockData)

      // expectation
      expect(fetchAnything).toHaveBeenCalled();
      expect(result).toEqual(expectedHomeworld);
  });

  it("when cleanPeople gets called data that comes in should match expected return", () => {
    // setup
    let mockData = [{
      birth_year: "19BBY",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: "Tatooine",
      language: "Galactic Basic",
      mass: "77",
      name: "Luke Skywalker",
      population: "200000",
      skin_color: "fair",
      species: "Human",
      starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
      url: "https://swapi.co/api/people/1/"
    }]

    let cleanData = [{
      category: "people",
      favorite: false,
      homeworld: "Tatooine",
      language: "Galactic Basic",
      name: "Luke Skywalker",
      population: "200000",
      species: "Human"
    }]
    // execution
    const result = cleanPeople(mockData);
    // expectation
    expect(result).toEqual(cleanData)
  });


  it("getAllPlanets fetch call takes mockData and returns expected data", async () => {
    // setup
    let mockData = [{
      climate: "temperate",
      diameter: "12500",
      gravity: "1 standard",
      name: "Alderaan",
      orbital_period: "364",
      population: "2000000000",
      residents: ["https://swapi.co/api/people/5/"]
    }]

    let residentData = { name: "Leia Organa" }

    let expectedPlanets = [{
      climate: "temperate",
      diameter: "12500",
      gravity: "1 standard",
      name: "Alderaan",
      orbital_period: "364",
      population: "2000000000",
      residents: ["Leia Organa"]
    }]
    fetchAnything.mockImplementation(() => Promise.resolve(residentData))
    // execution
    const result = await getAllPlanets(mockData)

    // expectation
    expect(fetchAnything).toHaveBeenCalled();
    expect(result).toEqual(expectedPlanets);
  });


  it("getResidents fetch call takes mockData and returns expected data", async () => {
    // setup
    let mockData = ["https://swapi.co/api/people/5/"];
    let residentData = { name: "Leia Organa" }
    let expectedResidents = ["Leia Organa"]
    fetchAnything.mockImplementation(() => Promise.resolve(residentData))
    // execution
    const result = await getResidents(mockData)
    // expectation
    expect(fetchAnything).toHaveBeenCalled();
    expect(result).toEqual(expectedResidents);
  });

  it("when cleanPeople gets called data that comes in should match expected return", () => {
    // setup
    let mockData = [{
      climate: "temperate",
      created: "2014-12-10T11:35:48.479000Z",
      diameter: "12500",
      edited: "2014-12-20T20:58:18.420000Z",
      films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
      gravity: "1 standard",
      name: "Alderaan",
      orbital_period: "364",
      population: "2000000000",
      residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"],
      rotation_period: "24",
      surface_water: "40",
      terrain: "grasslands, mountains",
      url: "https://swapi.co/api/planets/2/"
    }]
    let cleanData = [{
      category: "planets",
      climate: "temperate",
      favorite: false,
      name: "Alderaan",
      population: "2000000000",
      residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"],
      terrain: "grasslands, mountains"
    }]
    // execution
    const result = cleanPlanets(mockData)
    // expectation
    expect(result).toEqual(cleanData)
  })


  it("when cleanVehicles gets called data that comes in should match expected return", () => {
    // setup
    let mockData = [{
      cargo_capacity: "50000",
      consumables: "2 months",
      cost_in_credits: "150000",
      created: "2014-12-10T15:36:25.724000Z",
      crew: "46",
      edited: "2014-12-22T18:21:15.523587Z",
      films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
      length: "36.8",
      manufacturer: "Corellia Mining Corporation",
      max_atmosphering_speed: "30",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      pilots: [],
      url: "https://swapi.co/api/vehicles/4/",
      vehicle_class: "wheeled"
    }]
    let cleanData = [{
      category: "vehicles",
      class: "wheeled",
      favorite: false,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passenger: "30"
    }]
    // execution
    const result = cleanVehicles(mockData)
    expect(result).toEqual(cleanData)
  });

})
