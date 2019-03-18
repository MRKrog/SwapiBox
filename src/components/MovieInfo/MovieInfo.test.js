import React from 'react';
import MovieInfo from './MovieInfo';
import { shallow } from 'enzyme';

// import { fetchAnything } from '../Fetch/fetchAnything.js';
// jest.mock('../Fetch/fetchAnything.js');

const handleUser = jest.fn();

describe('MovieInfo', () => {
  let movieInfoComponenet;
  let mockData;
  let movieNumber = 6;

  beforeEach(() => {

    movieInfoComponenet = shallow(
      <MovieInfo handleUser={handleUser}
                 movieNumber={movieNumber}
      />)

    mockData = {
      title: "Revenge of the Sith",
      episode_id: 3,
      opening_crawl: "War! The Republic is crumbling nunder attacks by the ruthless Sith Lord",
      director: "George Lucas",
      producer: "Rick McCallum",
      release_date: "2005-05-19"
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockData)
    }))
  })


  it("should match snapshot when all data is passed correctly", () => {
    expect(movieInfoComponenet).toMatchSnapshot();
  });

  it("fetch call takes expected url", async () => {

    movieInfoComponenet.instance().getData();
    expect(movieInfoComponenet.state()).toEqual({
      movieCrawl: "War! The Republic is crumbling nunder attacks by the ruthless Sith Lord",
      movieTitle: "Revenge of the Sith",
      movieRelease: "2005-05-19"
    });
    expect(movieInfoComponenet).toMatchSnapshot();
  });


})
