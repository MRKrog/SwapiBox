import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const info = {
      name: 'Luke Skywalker',
      category: "people",
      favorite: false,
      homeworld: "Tatooine",
      language: "Galactic Basic",
      name: "Luke Skywalker",
      population: "200000",
      species: "Human"
    }

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Card info={info}/>)

  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

})
