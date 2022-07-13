import { Item, Title, CustomLink } from './MovieCard.styled';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';



function MovieCard({ id, title }) {
const location = useLocation()
  return <>
    {title && (<Item>
      <CustomLink to={`/movies/${id}`} state={{ from: location }}>
        <Title>{title}</Title>
      </CustomLink>
    </Item>)}</>
  
}

MovieCard.prototype = {
  id: propTypes.number,
  title: propTypes.string,
};

export default MovieCard;
