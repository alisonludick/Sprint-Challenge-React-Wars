import React from "react";
import "./StarWars.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StarWarsCharacter = ({
  name,
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
    const starStyle = {
        color: select.includes(url)? 'brown':'black',
    }
  return (
    <div className="character" onClick={() => change(url)} >
      <div className='character-name'>
      <h2>{name}</h2>
      <FontAwesomeIcon  style={starStyle} icon={faStar} />
      </div>
      <div className="character-details" style={style}>
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