import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
          <h1 className="hero-title">
            {/* {title || 'Welcome'}{' '} */}
            <span className="text-color-main">Iris Kotsinas</span>
            <br />
            <span className="text-color-second">Personal portfolio</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="links">
              <Link to="about" smooth duration={1000}>
                About me
              </Link>
              <Link to="projects" smooth duration={1000}>
                My work
              </Link>
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
      <Container>
        <div className="chevron-down-container">
          <Link to="about" smooth duration={1000}>
            <Icon path={mdiChevronDown} size={2} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Header;
