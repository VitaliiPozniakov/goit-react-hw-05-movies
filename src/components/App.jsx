
import Header from './Header';
import Container from './Container';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import MoviesPage from 'pages/Movies';
import MovieDetailsPage from 'pages/MovieDetails';


export const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Container>
  );
};