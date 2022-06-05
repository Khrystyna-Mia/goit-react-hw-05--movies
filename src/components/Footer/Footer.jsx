import Container from 'components/Container';
import { GiHeartBeats } from 'react-icons/gi';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer} id="footer">
      <Container>
        <div className={s.copyright}>
          <p className={s.copyrightText}>
            © 2022 | Developed
            <span className={s.icon}>
              <GiHeartBeats size={30} fill="var(--accent-color)" />
            </span>
            by Kristi
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
