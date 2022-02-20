import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeCard(props) {
  let url = props.to.startsWith('http');
  let navigate = useHistory();
  let name = props.name;
  let icon = name.toLowerCase() === 'twitter' ? 'fab fa-twitter' : name.toLowerCase() === 'github' ? 'fab fa-github' : 'fas fa-arrow-circle-right';
  const handleClick = () => {
    if (url) {
      window.open(props.to, '_blank');
    } else {
      navigate.push('/' + props.to);
    }
  };
  return (
    <button onClick={handleClick} className='home-card'>
      <div className='circle-animation'></div>
        <p>{name}<i className={icon}></i></p>
    </button>
  );
}

HomeCard.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default HomeCard;