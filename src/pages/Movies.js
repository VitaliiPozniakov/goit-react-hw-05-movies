import { useEffect, useState } from 'react';
import * as API from '../services/api';
import SearchBar from 'components/SearchBar';
import Container from 'components/Container';
import MoviesList from 'components/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
//   const [error, setError] = useState(null);
  const [query, setQuery] = useState('')

  const getQuery = (query) => {
 setQuery(query)
  }



  useEffect(() => {
    async function fetchAndSetDataFromBackend() {
      if (query === '') {
        return;
      }
      const fetchMovies = await API.fetchMovies(query);
    //   console.log(fetchMovies.results);

      const moviesArr = [];

      fetchMovies.results.map(
        ({ id, original_title, poster_path, vote_average, vote_count }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };
          return moviesArr.push(movie);
        }
      );
      setMovies(moviesArr);
    }

    try {
      // setIsLoading(prevIsLoading => !prevIsLoading);
      fetchAndSetDataFromBackend();

      // setIsLoading(prevIsLoading => !prevIsLoading);
    } catch (err) {
    //   setError(err.message);
    }
  }, [query]);

  // console.log(movies)

  return (
    <>
      <SearchBar getQuery={getQuery}/>
      {movies && (
        <Container>
          <MoviesList movies={movies} />
        </Container>
      )}
    </>
  );
}
