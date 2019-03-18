import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';


class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieCrawl: '',
      movieTitle: '',
      movieRelease: ''
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    return fetch(`https://swapi.co/api/films/${this.props.movieNumber}`)
    .then(response => response.json())
    .then(fetchData => {
      this.setState({
        movieCrawl: fetchData.opening_crawl,
        movieTitle: fetchData.title,
        movieRelease: fetchData.release_date
      });
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  render() {
    const { movieCrawl, movieTitle, movieRelease } = this.state;
    return (
        <div className="MovieInfo">
          <div className="fade"></div>
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>{movieTitle}</p>
                <h1>{movieRelease}</h1>
              </div>
              <p>{movieCrawl}</p>
            </div>
          </section>
          <button className="startBtn" onClick={this.props.handleUser}>Explore Movie</button>
        </div>
      )
    }
}

MovieInfo.propTypes = {
  movieNumber: PropTypes.number.isRequired
}

export default MovieInfo;
