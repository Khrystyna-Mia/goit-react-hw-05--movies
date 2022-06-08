import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import * as apiMovies from '../../services/apiMovies';

import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import noFoundImage from '../../images/no-image.jpg';

import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get('query')
  );
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');

    apiMovies
      .fetchSearchMovies(query)
      .then(({ results }) => {
        if (results.length === 0) {
          setError(`NO SUCH MOVIE FOUND ${query}`);
          setStatus('rejected');
          return;
        }

        setMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [query]);

  const handleFormSubmit = querySearch => {
    if (query === querySearch) return;
    setQuery(querySearch);
    navigate({ ...location, search: `query=${querySearch}` });
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />

      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorMessage message={error} />}

      {status === 'resolved' && (
        <ul className={s.list}>
          {movies.map(({ id, title, poster_path }) => (
            <li className={s.item} key={id}>
              <Link
                className={s.link}
                to={`/movies/${id}`}
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

                <h2 className={s.title}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
