/* eslint-disable react/prop-types */
import React from 'react';

function HomeCard(props) {
  return (
    <div className="home-card">
      <img src="https://i.ibb.co/GsRn88C/minimalist.jpg" alt="image animation card" />
      <a>{props.name}</a>
    </div>
  );
}
export default HomeCard;