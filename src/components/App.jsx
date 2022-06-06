import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
import { Route, Routes } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import NotFoundMovies from 'views/NotFoundMovies';
import HomePage from 'views/HomePage';
import MoviesPage from 'views/MoviesPage';
import MovieDetailsPage from 'views/MovieDetailsPage';

const App = () => {
  useEffect(() => {
    addBackToTop({
      diameter: 40,
      backgroundColor: '#ff0000',
      textColor: '#000',
    });
  }, []);

  useEffect(() => {
    pageHeader();
  });

  useEffect(() => {
    pageFooter();
  });

  const pageHeader = () => {
    const { height: pageHeaderHeight } = document
      .getElementById('header')
      .getBoundingClientRect();

    document.body.style.paddingTop = `${pageHeaderHeight}px`;
  };

  const pageFooter = () => {
    const { height: pageFooterHeight } = document
      .getElementById('footer')
      .getBoundingClientRect();

    document.body.style.paddingBottom = `${pageFooterHeight}px`;
  };

  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundMovies />} />
      </Routes>

      <Footer />
    </Container>
  );
};

export default App;
