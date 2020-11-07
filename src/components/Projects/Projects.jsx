import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import Image from '../Image/Image';
import Pdf from '../../files/TNM094_slutrapport.pdf';
import Pdf2 from '../../files/TNCG15__Global_Illumination_and_Rendering.pdf';
import Pdf3 from '../../files/Game-of-kaken.pdf';
import Pdf4 from '../../files/TNM085_Boids_simulation.pdf';

const Projects = () => {
  // TODO pass down as props
  const repo = 'https://github.com/iriskotsinas/DomeDagen';
  const repoDiatot = 'https://github.com/iriskotsinas/TNM040-diatot';
  const repoBoids = 'https://github.com/iriskotsinas/TNM085-Boids-simulation';
  const websiteBoids = 'http://www.student.itn.liu.se/~jacmo699/MT3/tnm085/boids/';
  const video3D =
    'https://www.dropbox.com/sh/6gfwx74o3qprbly/AAB5QoLdePnxe37lyDXvcsjra?dl=0&fbclid=IwAR16YNJxDxQcFDKD1AszTn2uh7Kcp6phYfkDirQQ-6hJhkjsgshfND2Dzko&preview=Game_of_Kaken_FINAL_2.0_30.5.2019+copy.mp4';

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
          {/* <p className="project-wrapper__info-text">
          </p> */}
          <Row className="project-row">
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Global Illumination and Rendering project
                    </h3>
                    <div>
                      <p>
                        In the course TNCG15 - Advanced Global Illumination and Rendering, fall
                        2020, we created a renderer in C++. The renderer is a Monte Carlo ray tracer
                        and can handle diffuse and specular objects. Two of the objects have
                        Lambertian reflectors which absorbs the light, and the third object has a
                        perfect reflector that reflects all rays hitting the object. The course also
                        discussed caustics and other rendering methods.
                      </p>
                      <p className="mb-4">Source code will be added soon.</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={Pdf2}
                    >
                      Report
                    </a>

                    {/* {repo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={repo}
                    >
                      Source Code
                    </a>
                  )} */}
                  </div>
                </Fade>
              </Col>
              <Col className="column-project" lg={5} sm={12}>
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
                      <Image alt="project" filename="GI-project.png" />
                    </div>
                  </div>
                </Fade>
              </Col>
            </Container>
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Summer internship at Axis Communications
                    </h3>
                    <div>
                      <p>
                        Summer 2020, I worked as a software engineer intern at Axis Communications
                        and got the opportunity to develop a new software for Axis surveillance
                        cameras. I worked with both back end and front end development, mainly in
                        TypeScript. I got a chance to design a full scale system, write tests for
                        the application as well as design a user interface from scratch. It was an
                        exciting learning experience and made me more eager to pursue my interest
                        for software development.
                      </p>
                      <p className="mb-4">
                        The software was implemented using TypeScript, Next.js, mongoose, Docker,
                        Jest, CircleCI and more.
                      </p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col className="column-project" lg={5} sm={12}>
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
            </Container>
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Domesday - B.Sc. project Linköping University
                    </h3>
                    <div>
                      <p>
                        The project, created spring 2020, resulted in a multiplayer game for 50 to
                        100 players where each player connects to the game through a mobile phone
                        device. Each character is a diver whos mission is to gather plastics in an
                        ocean where the environment is designed to best grasp the format of the dome
                        screen. The game was developed using C++ and OpenGL, and communication was
                        handled with node.js and websockets. The internal projection in the dome
                        theater was handled by the tool SGCT that was provided by Linköping
                        University. The game was designed as entertainment before the actual dome
                        screen showing at Visualiseringscenter C in Norrköping.
                      </p>
                      {/* <p className="mb-4"></p> */}
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
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
              <Col className="column-project" lg={5} sm={12}>
                {' '}
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    {/* <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer"> */}
                    <div data-tilt className="thumbnail rounded">
                      <Image alt="project" filename="domen.jpg" />
                      <Image alt="project" filename="diver.png" />
                    </div>
                    {/* </a> */}
                  </div>
                </Fade>
              </Col>
            </Container>
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Boids - Simulation of animal flocking behaviour
                    </h3>
                    <div>
                      <p>
                        The project, created spring 2020 in the course TNM085 Modeling Project, is a
                        simulation of animal flocking behaviour, also known as Boids.
                      </p>
                      <p className="mb-4">
                        The simulation was first implemented in MATLAB, and thereafter in JavaScript
                        with three.js.
                      </p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={Pdf4}
                    >
                      Report
                    </a>

                    {repoBoids && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repoBoids}
                      >
                        Source code
                      </a>
                    )}

                    {websiteBoids && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={websiteBoids}
                      >
                        Simulation
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col className="column-project" lg={5} sm={12}>
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
                      <Image alt="project" filename="boids-simulation.png" />
                      <Image alt="project" filename="boids-sim.png" />
                    </div>
                  </div>
                </Fade>
              </Col>
            </Container>
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">Game of Kåken</h3>
                    <div>
                      <p>
                        Game of Kåken was a group project in the course TNM061 - 3D Computer
                        Graphics, created spring 2019. We made a Game of Thrones inspired intro,
                        depicting the building Kåkenhus at Campus Norrköping emerging from the
                        ground. ground. The blueprints of the building was used to create a scalable
                        model. 3D-modelling was created in 3DsMax.
                      </p>
                      {/* <p className="mb-4"> The</p> */}
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={Pdf3}
                    >
                      Report
                    </a>

                    {video3D && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={video3D}
                      >
                        Video
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col className="column-project" lg={3} sm={12}>
                {' '}
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    {/* <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer"> */}
                    <div data-tilt className="thumbnail rounded">
                      <Image alt="project" filename="kaken1.jpg" />
                      <Image alt="project" filename="kaken2.jpg" />
                    </div>
                    {/* </a> */}
                  </div>
                </Fade>
              </Col>
            </Container>
            <Container className="project-total">
              <Col className="column-project" lg={7} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">Diatot</h3>
                    <div>
                      <p>
                        Group project in the course TNM040 - Communication and User Interfaces
                        created fall 2018. A mobile phone adapted website for diabetics to record
                        the blood sugar and carbohydrate intake to calculate a bolus dose of
                        insulin.
                      </p>
                      <p className="mb-4"> Implemented in JavaScript and React.</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={Pdf}
                    >
                      Report
                    </a>

                    {repoDiatot && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repoDiatot}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col className="column-project" lg={3} sm={12}>
                {' '}
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    {/* <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer"> */}
                    <div data-tilt className="thumbnail rounded">
                      <Image alt="project" filename="diatot.png" />
                    </div>
                    {/* </a> */}
                  </div>
                </Fade>
              </Col>
            </Container>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
