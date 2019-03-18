import React from 'react';
import { fetchAnything } from './fetchAnything.js';

describe('fetchAnything', () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      name: "Tatooine"
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));

  });

  it("fetch call takes expected url", () => {
    // setup
    const url = 'www.starwars.com'
    // execution
    fetchAnything(url);
    // expectation
    expect(fetch).toHaveBeenCalledWith(url);
  });


  it("if response not ok show error", () => {
    // setup
    const url = 'www.starwars.com';

    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }));
    // execution
    fetchAnything(url)
      .catch(error => {
        // expectation
        expect(error.message).toBe('Response not ok');
      })

  });


  // let mockData;
  //
  // beforeEach(() => {
  //   mockData = {
  //     name: "Tatooine"
  //   }
  //
  //   fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true,
  //     status: 200,
  //     json: () => Promise.resolve(mockData),
  //   }));
  //
  // });
  //
  // it("fetch call takes expected url", () => {
  //   // setup
  //   const url = 'www.starwars.com'
  //   // execution
  //   fetchAnything(url);
  //   // expectation
  //   expect(fetch).toHaveBeenCalledWith(url);
  // });
  //

  // it("fetch call returns expected data", () => {
  //   // setup
  //   const url = 'www.starwars.com'
  //   // execution
  //   fetchAnything(url)
  //     .then(data => {
  //       // expectation
  //       expect(data).toEqual(mockData);
  //     })
  // });


  // it("if response not ok show error", async () => {
  //   // setup
  //   const url = 'www.starwars.com';
  //
  //   fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
  //     ok: false
  //   }));
  //
  //   try {
  //     // execution
  //     await fetchAnything(url)
  //   } catch (error) {
  //     // expectations
  //     expect(error.message).toBe('Response not ok')
  //   }
  // });


})
