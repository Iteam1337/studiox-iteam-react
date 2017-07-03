import React, { Component } from 'react'

import './MovieList.css'


class MovieList extends Component {
  render() {
    const movies = []
    this.props.movies.forEach((movie) => {
      movies.push(<li key={movie.id}>{movie.title}</li>)
    })

    return (
      <div className="MovieList">
        <h3>Most Popular Movies:</h3>
        <ul>
          {movies}
        </ul>
      </div>
    )
  }
}

export default MovieList;
