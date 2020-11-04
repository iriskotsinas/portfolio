import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import Image from '../Image/Image';
import Pdf from '../../files/TNM094_slutrapport.pdf';

const Projects = () => {
  const repo = 'https://github.com/iriskotsinas/DomeDagen';
  const img = 'profile.jpg';

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
            This website is still under development, but you can find some of my work below or on my
            GitHub-account linked in the bottom of the page.
          </p>
          <Row className="project-row">
            <Col className="column-project" lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Summer internship at Axis Communications
                  </h3>
                  <div>
                    <p>
                      Last summer I worked as a software engineer intern at Axis Communications and
                      got the opportunity to develop a new software for Axis surveillance cameras. I
                      worked with both back end and front end development, mainly in TypeScript. I
                      got a chance to design a full scale system, write tests for the application as
                      well as design a user interface from scratch. It was an exciting learning
                      experience and made me more eager to pursue my interest for software
                      development.
                    </p>
                    {/* <p className="mb-4"></p> */}
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={5} sm={12}>
              {' '}
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <div data-tilt className="thumbnail rounded">
                    <Image alt="project" filename="axis.jpg" />
                  </div>
                </div>
              </Fade>
            </Col>
            <Col className="column-project" lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Domesday - B.Sc. project Linköping University
                  </h3>
                  <div>
                    <p>
                      The project resulted in a multiplayer game for 50 to 100 players where each
                      player connects to the game through a mobile phone device. Each character is a
                      diver whos mission is to gather plastics in an ocean where the environment is
                      designed to best grasp the format of the dome screen. The game was developed
                      using C++ and OpenGL, and communication was handled with node.js and
                      websockets. The internal projection in the dome theater was handled by the
                      tool SGCT that was provided by Linköping University. The game was designed as
                      entertainment before the actual dome screen showing at Visualiseringscenter C
                      in Norrköping.
                    </p>
                    {/* <p className="mb-4"></p> */}
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={Pdf}
                  >
                    Report
                  </a>

                  {repo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={repo}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </Fade>
            </Col>
            <Col lg={5} sm={12}>
              {' '}
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <div data-tilt className="thumbnail rounded">
                      <Image alt="project" filename="domen.jpg" />
                      <Image alt="project" filename="diver.png" />
                    </div>
                  </a>
                </div>
              </Fade>
            </Col>
            <Col className="column-project" lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Diatot</h3>
                  <div>
                    <p>
                      Group project in the course TNM040 - Communication and User Interfaces. A
                      mobile phone adapted website for diabetics to record the blood sugar and
                      carbohydrate intake to calculate a bolus dose of insulin. Implemented in
                      JavaScript and React.
                    </p>
                    {/* <p className="mb-4"></p> */}
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={Pdf}
                  >
                    Report
                  </a>

                  {repo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={repo}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </Fade>
            </Col>
            <Col lg={3} sm={12}>
              {' '}
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <div data-tilt className="thumbnail rounded">
                      <Image alt="project" filename="diatot1.png" />
                      <Image alt="project" filename="diatot2.png" />
                    </div>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>

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
