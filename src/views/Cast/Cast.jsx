import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as apiMovies from '../../services/apiMovies';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import noFoundImage from '../../images/no-image.jpg';

import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    apiMovies
      .fetchMovieCredits(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          setStatus('idle');
          return;
        }
        setCast(cast);
        setStatus('resolved');
      })
      .catch(error => {
        setError('PLEASE, TRY AGAIN');
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorMessage message={error.message} />}

      {status === 'resolved' && (
        <ul className={s.cast}>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li className={s.item} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noFoundImage
                }
                alt={original_name}
              />

              <h3 className={s.name}>{original_name}</h3>

              <p className={s.character}>
                Character: <span className={s.text}>{character}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
