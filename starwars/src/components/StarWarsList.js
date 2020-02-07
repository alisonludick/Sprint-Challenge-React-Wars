import React from "react";
import "./StarWars.css";
import Characters from './StarWarsCharacter';

const StarWarsList = ({ list  , nextPage , previousPage,next ,previous,onToggle, selected,loading }) => {
    const style={
        display: loading ?'block':'none'
    }
    const anotherstyle={
        display: loading ?'none':'block'
    }
  return (
  
    <div className="characterList">
      <div className = 'initial' style={style}>
    </div>
    <h1 style={anotherstyle}>Star Wars Characters</h1>
      {list.map(todo => (
        <Characters 
          key={todo.url}
          name={todo.name}
          gender={todo.gender}
          height={todo.height}
          mass={todo.mass}
          eyeColor={todo.eye_color}
          hairColor={todo.hair_color}
          skinColor={todo.skin_color}
          url={todo.url}
          select={selected}
          change={onToggle}
        />
      ))}
      <div>
      { previous ? <button className ='button' onClick={() =>previousPage(previous)}>Previous</button> : null}
      {next ? <button className ='button'  onClick={() =>nextPage(next)}>Next</button> :null}
      </div>
    </div>
  );
};
export default StarWarsList;