import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import Image from '../Image/Image';
import Pdf from '../../files/iris-cv-2020-nov.pdf';

const About = () => {
  const img = 'profile.jpg';

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const resume = 'resume';

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
    <section>
      <section id="about">
        <Container className="about-container">
          <Title title="About Me" />
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <Image alt="profile picture" filename={img} />
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    My name is Iris Kotsinas and I am a 22-year old Master of Science student in
                    Media Technology and Engineering, graduating in June 2022 from Linköping
                    University.
                  </p>
                  <p className="about-wrapper__info-text">
                    I am an ambitious student who likes to stay busy. I am as of this year Student
                    Brand Manager for Netlight Consulting and a part of the programming mentorship
                    LiTHehack. I have previously been active in several extracurricular activities
                    and I also enjoy working as a laboratory assistant in various courses. I love
                    sports, especially lacrosse, and I played in the Swedish women’s national
                    lacrosse team at the European Championship 2019 in Netanya, Israel.
                  </p>
                  <p className="about-wrapper__info-text">
                    Last summer, I worked as a software engineer intern at Axis Communications and
                    got the opportunity to develop a new software for Axis surveillance cameras. It
                    was an exciting learning experience and made me more eager to pursue my interest
                    for software development.
                  </p>
                  <p className="about-wrapper__info-text">
                    My resume is linked below if you are interested in finding out more about me.
                  </p>
                  {resume && (
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={Pdf}
                      >
                        Resume
                      </a>
                    </span>
                  )}
                </div>
              </Fade>
            </Col>
            {/* <Col md={5} sm={12}>
              <Card className="about-wrapper__card" style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col> */}
          </Row>
        </Container>
        <Container className="chevron-btn">
          <div className="chevron-down-about">
            <Link to="projects" smooth duration={1000}>
              <Icon path={mdiChevronDown} size={2} />
            </Link>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default About;
