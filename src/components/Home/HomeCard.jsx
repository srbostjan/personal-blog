import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeCard({ to, name }) {
  const url = to.startsWith('http');
  const navigate = useHistory();
  const icon = () => {
    if (name.toLowerCase() === 'twitter') return 'fab fa-twitter';
    if (name.toLowerCase() === 'github') return 'fab fa-github';
    return 'fas fa-arrow-circle-right';
  };
  const handleClick = () => {
    if (url) {
      window.open(to, '_blank');
    } else {
      navigate.push(`/${to}`);
    }
  };
  return (
    <button type="button" onClick={handleClick} className="home-card">
      <div className="circle-animation" />
      <p>
        { name }
        <i className={icon()} />
      </p>
    </button>
  );
}

HomeCard.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default HomeCard;
