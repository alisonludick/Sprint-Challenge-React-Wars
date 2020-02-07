import React from "react";
import "./StarWars.css";

const StarWarsCharacter = ({
  name,
  birthYear,
  gender,
  height,
  mass,
  eyeColor,
  hairColor,
  skinColor,
  change,
  url,
  select
}) => {
    const style = {
        display: select.includes(url) ?'block':'none',
    }
  return (
    <div className="character" onClick={() => change(url)} >
      <div className='character-name'>
      <h2>{name}</h2>
      </div>
      <div className="character-details" style={style}>
        <p>Birth Year: {birthYear}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Skin Color: {skinColor}</p>
      </div>
    </div>
  );
};
export default StarWarsCharacter;