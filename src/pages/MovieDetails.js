import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import * as API from '../services/api';
import MovieDetails from 'components/MovieDetails';
// import Loader from 'components/Loader';

// const Cast = lazy(() =>
//   import('./Cast.js' /* webpackChunkName: "cast-view" */),
// );
// const Reviews = lazy(() =>
//   import('./Reviews.js' /* webpackChunkName: "review-view" */),
// );

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    API.fetchMovieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movieInfo = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return setMovieInfo(movieInfo);
      },
    );
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense> */}
    </>
  );
}

export default MovieDetailsPage;

