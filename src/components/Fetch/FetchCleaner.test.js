import React from 'react';
import { cleanPeople, getSpecies, getHomeworld } from './fetchCleaner.js';
import { fetchAnything } from './fetchAnything.js';
jest.mock('./fetchAnything.js')


describe('fetchCleaner', () => {
  let url;

  beforeEach(() => {
    url = 'www.starwars.com';

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));

  });

  it("fetch call takes expected url", async () => {
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

    // fetchAnything(url);
    // expectation
    // expect(fetchAnything).toHaveBeenCalled();
    expect(result).toEqual(expectedData);

  });

  // it("fetch call returns expected data", async () => {
  //
  // });
  //
  // it("if response not ok show error", async () => {
  //
  // });

})
