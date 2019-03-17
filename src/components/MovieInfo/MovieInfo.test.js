import React from 'react';
import App from './App';
import { fetchAnything } from './fetchAnything.js';


describe('MovieInfo', () => {

  beforeEach(() => {

    mockData = {
      name: "Tatooine"
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));

  })


})

it('renders without crashing', () => {

});
