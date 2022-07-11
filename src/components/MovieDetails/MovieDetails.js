// import { useLocation, useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

import Container from 'components/Container';

import {
  BtnGoBack,
  Label,
  MainWrapper,
  Poster,
  InfoWrapper,
  TitleWrapper,
  Title,
  ReleaseDate,
  GenresList,
  GenresItem,
  Description,
  VoteWrapper,
  VoteAverage,
  VoteCount,
  Value,
  AdditionalWrapper,
  AdditionalTitle,
  NavigationsList,
  NavigationsItem,
  CustomLink,
} from './MovieDetails.styled';


function MovieDetails({ movieInfo }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const subLocation = location.state.from;

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

//   const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <Container>
      <BtnGoBack type="button" >
       
        <Label>Go back</Label>
      </BtnGoBack>

      <MainWrapper>
        <Poster
          src={poster && `https://image.tmdb.org/t/p/w500/${poster}` }
          alt={title}
        />
        <InfoWrapper>
          <TitleWrapper>
            <Title>{title}</Title>
            <ReleaseDate>{releaseDate}</ReleaseDate>
          </TitleWrapper>
          <GenresList>
            {genres &&
              genres.map(({ name, id }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </GenresList>
          <Description>{description}</Description>
          <VoteWrapper>
            <VoteAverage>
              Vote average: <Value>{voteAverage}</Value>
            </VoteAverage>
            <VoteCount>
              Vote count: <Value>{voteCount}</Value>
            </VoteCount>
          </VoteWrapper>
        </InfoWrapper>
      </MainWrapper>

      <AdditionalWrapper>
        <AdditionalTitle>Additional Information</AdditionalTitle>
        <NavigationsList>
          <NavigationsItem>
            <CustomLink to="cast" >
        
            </CustomLink>
          </NavigationsItem>
          <NavigationsItem>
            <CustomLink to="reviews" >
             
            </CustomLink>
          </NavigationsItem>
        </NavigationsList>
      </AdditionalWrapper>
    </Container>
  );
}

MovieDetails.prototype = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      }),
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};

export default MovieDetails;