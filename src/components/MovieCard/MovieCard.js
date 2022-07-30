import { Item, Title, CustomLink, Poster } from './MovieCard.styled';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function MovieCard({ id, title, poster }) {
  // console.log(poster);

  const location = useLocation();
  return (
    <>
      {title && (
        <Item>
          <CustomLink to={`/movies/${id}`} state={{ from: location }}>
            <Poster
              src={poster && `https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title}
            />
            <Title>{title}</Title>
          </CustomLink>
        </Item>
      )}
    </>
  );
}

MovieCard.prototype = {
  id: propTypes.number,
  title: propTypes.string,
};

export default MovieCard;
