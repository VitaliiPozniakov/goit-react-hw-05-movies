import { Item, Title, CustomLink } from './MovieCard.styled';
import propTypes from 'prop-types';

function MovieCard({ id, title }) {
  return <>
    {title && (<Item>
      <CustomLink to={`/movies/${id}`}>
        <Title>{title}</Title>
      </CustomLink>
    </Item>)}</>
  
}

MovieCard.prototype = {
  id: propTypes.number,
  title: propTypes.string,
};

export default MovieCard;
