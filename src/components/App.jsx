
import Header from './Header';
import Container from './Container';
import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loader from './Loader';

const HomePage = lazy(()=>
  import('../pages/Home' /* webpackCgunkName: "home-page" */)
)
const MoviesPage = lazy(()=> 
import('../pages/Movies' /* webpackChunkName: "movies-page" */)
)
const MovieDetailsPage = lazy (()=> import('../pages/MovieDetails' /*webpackChunkName: "movie-details-page" */))



export const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
      </Suspense>
    </Container>
  );
};