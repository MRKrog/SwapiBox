import React from 'react';
import MovieContainer from './MovieContainer';
import { shallow } from 'enzyme';
import { fetchAnything } from '../Fetch/fetchAnything.js';

const movieNumber = 3;

describe('MovieContainer', () => {
  let wrapper;
  let url;

  beforeEach(() => {
      wrapper = shallow(<MovieContainer movieNumber={movieNumber}/>)

      url = 'www.starwars.com';

      fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockData),
      }));

  })

  it('Should Match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})
