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

export function fetchSearchMovies(query) {
  return apiMovies(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return apiMovies(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return apiMovies(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return apiMovies(
    `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
