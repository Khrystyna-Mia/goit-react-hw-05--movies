import PropTypes from 'prop-types';
import errorImg from '../../images/error-image.jpg';
import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div role="alert" className={s.content}>
      <img src={errorImg} width="600" alt="not found" className={s.img} />

      <p text={message} className={s.text}>
        {message}
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
