import errorImg from '../../images/error-image.jpg';
import s from './NotFoundMovies';

const NotFoundMovies = () => {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImg} width="400" alt="not found" className={s.img} />

      <p className={s.text}>OOOPS! PAGE NOT FOUND 👀</p>
    </div>
  );
};

export default NotFoundMovies;
