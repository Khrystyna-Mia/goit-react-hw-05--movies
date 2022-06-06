import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowMore from 'react-simple-show-more';

import * as apiMovies from '../../services/apiMovies';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    apiMovies
      .fetchMovieReviews(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          setStatus('idle');
          return;
        }
        setReviews(results);
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
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li className={s.item} key={id}>
              <h3 className={s.author}>Author: {author}</h3>

              <p className={s.content}>
                <ShowMore
                  text={content}
                  length={600}
                  showMoreLabel=" Show more >>"
                  showLessLabel=" Show more <<"
                  style={{
                    fontWeight: 'bold',
                    color: '#dc3545',
                    cursor: 'pointer',
                  }}
                />
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
