import { Wrapper } from "./MoviesList.styled";
import MovieCard from "components/MovieCard";
import propTypes from 'prop-types'

export default function MoviesList ({movies}) {
    return (
        <Wrapper>
        {movies.map(({ id, title, poster }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster={poster}
            />
          );
        })}
      </Wrapper>
    )
}

MoviesList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
    }),
  ).isRequired,
};