import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from './Container';
import Footer from './Footer';
import Header from './Header';

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

      <Footer />
    </Container>
  );
};

export default App;
