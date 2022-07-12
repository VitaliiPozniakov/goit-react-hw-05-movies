import {  Item,
    Title,
   
    CustomLink} from './MovieCard.styled'
import propTypes from 'prop-types';

function MovieCard({ id, title }) {

    return (
      <Item>
<CustomLink to={`/movies/${id}`}>
          <Title>{title && title}</Title>
     
       
          </CustomLink>
      </Item>
    );
  }
  
  MovieCard.prototype = {
    id: propTypes.number,
    title: propTypes.string,
  };
  
  export default MovieCard;
