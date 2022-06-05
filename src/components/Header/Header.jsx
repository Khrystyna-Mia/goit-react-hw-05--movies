import Container from 'components/Container';
import Navigation from 'components/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header} id="header">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
