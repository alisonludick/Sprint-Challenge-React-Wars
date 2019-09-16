import React from 'react';
import './StarWars.css'; 

function StarWars(props) {
  const { name } = props;
  return (
    <div className="infocard">
      <p>Name: {props.Name} .</p>
      <p>Birth Year: {props.Birth} .</p>
      <p>Gender: {props.Gender}</p>
    </div>
  );
}

export default StarWars;