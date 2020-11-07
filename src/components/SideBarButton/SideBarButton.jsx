import React, { useState, useEffect } from 'react';
import { mdiChevronUpCircle } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';

const SideBarButton = ({ showBelow }) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
    return null;
  });

  return (
    <div>
      {show && (
        <Icon
          onClick={handleClick}
          className="to-top"
          aria-label="to top"
          path={mdiChevronUpCircle}
          size={2}
          component="span"
        />
      )}
    </div>
  );
};

SideBarButton.propTypes = {
  showBelow: PropTypes.number,
};

export default SideBarButton;
