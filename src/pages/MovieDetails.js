import { useState, useEffect, lazy, Suspense  } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import * as API from '../services/api';
import MovieDetails from 'components/MovieDetails';
import Loader from 'components/Loader';
const CastPage = lazy(() =>
  import('./Cast.js' /* webpackChunkName: "cast-page" */),
);
const ReviewsPage = lazy(() =>
  import('./Reviews.js' /* webpackChunkName: "review-page" */),
);

function MovieDetailsPage() {
  // console.log(useParams())
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function fetchAndSetDataFromBackend() {
      const fetchMovieDetails = await API.fetchMovieDetails(movieId);
      const {
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
      } = fetchMovieDetails;

      // console.log(fetchMovieDetails);

      const movieInfo = {
        title: original_title,
        genres: genres,
        description: overview,
        poster: poster_path,
        releaseDate: release_date,
        voteAverage: vote_average,
      };
      setMovieInfo(movieInfo);
    }

    try {
      fetchAndSetDataFromBackend();
    } catch (err) {
      //   setError(err.message);
    }
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

<Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
