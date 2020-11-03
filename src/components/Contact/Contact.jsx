import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Icon from '@mdi/react';
// eslint-disable-next-line no-unused-vars
import { mdiPhone, mdiAt, mdiLinkedin } from '@mdi/js';
import Title from '../Title/Title';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          {/* <p className="about-wrapper__info-text">
            This website is still under development, but you can find some of my work on my
            GitHub-account.
          </p> */}
          <div>
            <a href="https://www.linkedin.com/in/iriskotsinas/">
              <Icon path={mdiLinkedin} size={4} />
            </a>
            <a href="mailto:iris.kotsinas@gmail.com">
              <Icon path={mdiAt} size={4} />
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
