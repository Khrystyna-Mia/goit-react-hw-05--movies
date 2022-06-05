const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8291bfa5fdbbfe1b8899750e95db67c5';

async function apiMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('404 Not Found 😔 The resource requested could not be found')
      );
}

export function fetchTrending() {
  return apiMovies(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
}
