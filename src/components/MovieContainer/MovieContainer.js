import React, { Component } from 'react';
import './MovieContainer.scss';


class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    }
  }

  handlePeopleBtn = (btnValue) => {
    const url = `https://swapi.co/api/people`;
    fetch(url)
      .then(response => response.json())
      .then(people => console.log(people))
      .catch(error => this.setState({ error: error.message }))
  }

  // componentDidMount() {
  //   const url = `${this.props.apiUrl}/`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.fetchBios(data.bio))
  //     .then(staff => this.setState({ staff }))
  //     .catch(error => this.setState({ error: error.message }))
  // }

  fetchBios(staff) {
    const tomsLife = staff.map(person => {
      return fetch(person.info)
        .then(response => response.json())
        .then(data => ({...data, name: person.name}))
    })
    console.log(tomsLife);
    return Promise.all(tomsLife);
  }


  render() {
    return (
      <div className="MovieContainer">
        <div className="MovieTitle">
          <h1>SWAPI-Box</h1>
        </div>
        <div className="MovieInfoContainer">
          <section className="MovieButtons">
            <button onClick={this.handlePeopleBtn}>People</button>
            <button>Planets</button>
            <button>Vehicles</button>
          </section>
          <section className="MovieCardContainer">
            <div>
              <h3>Luke SkyWalker</h3>
              <ul>
                <li>Homeworld</li>
                <li>Species</li>
                <li>Language</li>
                <li>Home Population</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default MovieContainer;
