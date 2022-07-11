const API_KEY = 'c82323a9bebf6624949ce9fae3cb7c73';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';

const url = `${BASE_URL}?api_key=${API_KEY}`



async function fetchTrending () {
    const responce = await fetch(url);
    return responce.ok ? responce.json() : Promise.reject(new Error('Not found'));
  }

  export default fetchTrending