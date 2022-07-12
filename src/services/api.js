const API_KEY = 'c82323a9bebf6624949ce9fae3cb7c73';

const BASE_URL = 'https://api.themoviedb.org';

async function fetchWithErrorHandling(url = '', config = {}) {
  const responce = await fetch(url, config);
  return responce.ok ? responce.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchMovies(query, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
