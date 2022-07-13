import { useEffect, useState } from 'react';
import * as API from '../services/api';
import SearchBar from 'components/SearchBar';
import Container from 'components/Container';
import MoviesList from 'components/MoviesList';
import { useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  //   const [error, setError] = useState(null);

  // const [query, setQuery] = useState('');
  // const getQuery = query => {
  //   setQuery(query);
  // };

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  useEffect(() => {
    async function fetchAndSetDataFromBackend() {
      if (query === '') {
        return;
      }
      const fetchMovies = await API.fetchMovies(query);
      //   console.log(fetchMovies.results);

      const moviesArr = [];

      fetchMovies.results.map(({ id, original_title }) => {
        const movie = {
          id,
          title: original_title,
        };
        return moviesArr.push(movie);
      });
      setMovies(moviesArr);
    }

    try {
      fetchAndSetDataFromBackend();
    } catch (err) {
      //   setError(err.message);
    }
  }, [query]);

  // console.log(movies)

  return (
    <Container>
      <SearchBar />
      {movies && <MoviesList movies={movies} />}
    </Container>
  );
}
