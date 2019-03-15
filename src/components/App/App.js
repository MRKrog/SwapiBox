import React, { Component } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: true,
      movieNumber: Math.floor(Math.random() * 7) + 1
    }
  }

  handleUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {
    const { currentUser, movieNumber } = this.state;
    return (
      <div className="App">
      { currentUser
        ? <MovieContainer movieNumber={movieNumber} />
        : <MovieInfo movieNumber={movieNumber}
                     handleUser={this.handleUser}
          />
      }
      </div>
    );
  }
}

export default App;
