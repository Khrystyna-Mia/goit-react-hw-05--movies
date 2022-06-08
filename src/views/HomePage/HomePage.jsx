import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as apiMovies from '../../services/apiMovies';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import noFoundImage from '../../images/no-image.jpg';

import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    apiMovies
      .fetchTrending()
      .then(({ results }) => {
        setTrendingMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        setError('PLEASE, TRY AGAIN');
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>

      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorMessage message={error.message} />}

      {status === 'resolved' && (
        <>
          <ul className={s.list}>
            {trendingMovies.map(({ id, title, poster_path }) => (
              <li className={s.item} key={id}>
                <Link
                  className={s.link}
                  to={`movies/${id}`}
                  state={{ from: location }}
                >
                  <div className={s.thumb}>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : noFoundImage
                      }
                      alt={title}
                      className={s.poster}
                    />
                  </div>

                  <h2 className={s.text}>{title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HomePage;
