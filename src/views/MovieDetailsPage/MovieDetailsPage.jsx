import { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import * as apiMovies from '../../services/apiMovies';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import noFoundImage from '../../images/no-image.jpg';

import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    apiMovies
      .fetchMovieDetails(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setMovie({
          src: poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${noFoundImage}`,
          title: original_title,
          score: popularity,
          overview,
          genres,
        });
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <main className={s.main}>
      <button className={s.button} type="button" onClick={goBack}>
        <TiArrowBack size={30} fill="var(--accent-color)" />
      </button>

      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorMessage message={error} />}

      {status === 'resolved' && (
        <>
          <div className={s.container}>
            <img className={s.poster} src={movie.src} alt={movie.title} />

            <div className={s.wrapper}>
              <h2 className={s.movieTitle}>{movie.title}</h2>

              <h3 className={s.title}>User Score</h3>
              <p className={s.text}>{movie.score}</p>

              <h3 className={s.title}>Overview</h3>
              <p className={s.text}>{movie.overview}</p>

              <h3 className={s.title}>Genres</h3>
              <ul className={s.genresList}>
                {movie.genres.map(genre => (
                  <li className={s.genresItem} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={s.additional}>
            <h4 className={s.infoTitle}>Additional information</h4>

            <ul className={s.list}>
              <li className={s.item}>
                <NavLink
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location?.state?.from ?? '/' }}
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                >
                  Cast
                </NavLink>
              </li>

              <li className={s.item}>
                <NavLink
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location?.state?.from ?? '/' }}
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetailsPage;
