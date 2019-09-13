import React from 'react';

function StarWars(props) {
  const { name, addToApp } = props;
  return (
    <div>
      <p>{props.Name}</p>
      <img src = {props.Image}/>
      <p>{props.Gender}</p>
    </div>
  );
}

export default StarWars;