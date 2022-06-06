import { lazy, Suspense, useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
import { Route, Routes } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "moviedetails-page" */
  )
);

const Cast = lazy(() =>
  import('../views/Cast' /* webpackChunkName: "cast-page" */)
);

const Reviews = lazy(() =>
  import('../views/Reviews' /* webpackChunkName: "reviews-page" */)
);

const NotFoundMovies = lazy(() =>
  import(
    '../views/NotFoundMovies' /* webpackChunkName: "notfoundmovies-page" */
  )
);

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

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundMovies />} />
        </Routes>
      </Suspense>

      <Footer />
    </Container>
  );
};

export default App;
