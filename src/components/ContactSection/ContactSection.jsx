import React from 'react';
import { Container } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { mdiPhone, mdiAt, mdiLinkedin, mdiGithub } from '@mdi/js';
import Title from '../Title/Title';

const Contact = () => {

  return (
    <section id="contact-part">
      <Container className="contact-section">
        <Title title="Contact" />
        <p className="contact-text">
          If you are interested in working with me or have any questions, feel free to contact me.
          You can find links to my Github and Linkedin as well as my email adress at the bottom of
          this page.
        </p>
      </Container>
    </section>
  );
};

export default Contact;
