import {  Item,
    Title,
    Img,
    VoteWrapper,
    VoteAverage,
    VoteCount,
    Value,CustomLink} from './MovieCard.styled'
import propTypes from 'prop-types';



function MovieCard({ id, title, poster, voteAverage, voteCount }) {



  
    return (
      <Item>
<CustomLink to={`/movies/${id}`}>
          <Title>{title && title}</Title>
          <Img
            src={poster && `https://image.tmdb.org/t/p/w500/${poster}`}
            alt={title}
          />
          <VoteWrapper>
            <VoteAverage>
              Vote average: <Value>{voteAverage}</Value>
            </VoteAverage>
            <VoteCount>
              Vote count:<Value> {voteCount}</Value>
            </VoteCount>
          </VoteWrapper>
          </CustomLink>
      </Item>
    );
  }
  
  MovieCard.prototype = {
    id: propTypes.number,
    title: propTypes.string,
    poster: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  };
  
  export default MovieCard;
