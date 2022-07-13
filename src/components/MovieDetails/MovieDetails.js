// import { useLocation, useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container';

import {
  BtnGoBack,
  Label,
  MainWrapper,
  Poster,
  InfoWrapper,

  Title,
  ReleaseDate,
  GenresList,
  GenresItem,
  Description,

  VoteAverage,

  SubTitle,
  AdditionalWrapper,
  AdditionalTitle,
  NavigationsList,
  NavigationsItem,
  CustomLink,
} from './MovieDetails.styled';


function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const navigate = useNavigate();

  // const subLocation = location.state.from;

// console.log(location)

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
  } = movieInfo;

  const onGoBackBtn = () => navigate(location?.state?.from ?? '/');

const userScore = voteAverage * 10

  return (
    <Container>
      <BtnGoBack type="button" onClick={onGoBackBtn}>
       
        <Label>Go back</Label>
      </BtnGoBack>

      <MainWrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${poster}` }
          alt={title}
        />
        <InfoWrapper>
        
            <Title>{title}</Title>
            <ReleaseDate><SubTitle>Release date:</SubTitle>{releaseDate}</ReleaseDate>
            <VoteAverage> <SubTitle>User Score:</SubTitle>{userScore}%</VoteAverage>
        
          <GenresList> <SubTitle>Genres:</SubTitle>
            {genres &&
              genres.map(({ name, id }) => (
                <GenresItem key={id}> {name}, </GenresItem>
              ))}
          </GenresList>
          <Description>Overview: {description}</Description>
         
        </InfoWrapper>
      </MainWrapper>

      <AdditionalWrapper>
        <AdditionalTitle>Additional Information:</AdditionalTitle>
        <NavigationsList>
          <NavigationsItem>
            <CustomLink to="cast" state={{ from: location }}>
        Cast
            </CustomLink>
          </NavigationsItem>
          <NavigationsItem>
            <CustomLink to="reviews" state={{ from: location }}>
             Reviews
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