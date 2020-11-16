import React from 'react';
import { Container } from 'react-bootstrap';
import Icon from '@mdi/react';
// eslint-disable-next-line no-unused-vars
import { mdiPhone, mdiAt, mdiLinkedin, mdiGithub } from '@mdi/js';

const Contact = () => {
  return (
    <section id="contact">
      <Container className="contact-wrapper">
        {/* <Title title="Contact" /> */}
        {/* <Fade bottom duration={1000} delay={800} distance="30px"> */}
        <div className="endLinks">
          <a href="https://www.linkedin.com/in/iriskotsinas/">
            <Icon path={mdiLinkedin} size={2} />
          </a>
          <a href="mailto:iris.kotsinas@gmail.com">
            <Icon path={mdiAt} size={2} />
          </a>
          <a href="https://github.com/iriskotsinas">
            <Icon path={mdiGithub} size={2} />
          </a>
        </div>
        {/* </Fade> */}
      </Container>
      <Container className="copy">
        <p>Iris Kotsinas © {new Date().getFullYear()}</p>
      </Container>
    </section>
  );
};

export default Contact;
