import React from 'react';
import { Container } from 'react-bootstrap';
import Icon from '@mdi/react';
// eslint-disable-next-line no-unused-vars
import { mdiPhone, mdiAt, mdiLinkedin, mdiGithub } from '@mdi/js';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);

  return (
    <section id="contact">
      <Container>
        {/* <Title title="Contact" /> */}
        {/* <Fade bottom duration={1000} delay={800} distance="30px"> */}
        <div className="endLinks">
          <a href="https://www.linkedin.com/in/iriskotsinas/">
            <Icon path={mdiLinkedin} size={4} />
          </a>
          <a href="mailto:iris.kotsinas@gmail.com">
            <Icon path={mdiAt} size={4} />
          </a>
          <a href="https://github.com/iriskotsinas">
            <Icon path={mdiGithub} size={4} />
          </a>
        </div>
        {/* </Fade> */}
      </Container>
    </section>
  );
};

export default Contact;
