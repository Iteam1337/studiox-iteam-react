import React, { Component } from 'react'

import api from './api'
import './App.css'
import MovieList from './MovieList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      APIKey: 'no key',
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies() {
    api.getPopularMovies(this.state.APIKey).then((result) => {
      this.setState(() => ({
        movies: result.results
      }))
    }).catch((error) => {
      console.error('Could not fetch popular movies.')
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My movie app</h2>
          <div>Du har angett API-nyckel: {this.state.APIKey}</div>
        </div>
        <MovieList
          movies={this.state.movies}
        />
      </div>
    )
  }
}

export default App;
