import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import Title from '../Title/Title';

const Projects = () => {
  // const { projects } = useContext(PortfolioContext);

  // eslint-disable-next-line no-unused-vars
  const [isDesktop, setIsDesktop] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="My work" />
          <p className="about-wrapper__info-text">
            This website is still under development, but you can find some of my work on my
            GitHub-account.
          </p>
          <div>
            <a href="https://github.com/iriskotsinas">
              <Icon path={mdiGithub} size={4} />
              iriskotsinas
            </a>
          </div>
          <Title title="Contact" />
          <p className="contact-text">
            If you are interested in working with me or have any questions, feel free to contact me.
            You can find links to my Github and Linkedin as well as my email adress at the bottom of
            this page.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
