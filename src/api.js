const api = {
  // -------------------------
  // Fetch most popular movies
  // -------------------------
  getPopularMovies(key) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&include_adult=false`
    const request = new Request(url)

    return fetch(request).then((response) => response.json())
  }
}

export default api
