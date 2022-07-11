import { Wrapper } from "./MoviesList.styled";
import MovieCard from "components/MovieCard";

export default function MoviesList ({movies}) {
    return (
        <Wrapper>
        {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster={poster}
              voteAverage={voteAverage}
              voteCount={voteCount}
            />
          );
        })}
      </Wrapper>
    )
}