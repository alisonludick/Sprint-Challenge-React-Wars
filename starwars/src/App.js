import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWars from './components/StarWars'; 
import './App.css';

const starwarsApi = 'https://swapi.co/api/people/'; 

const App = () => {
  const [starwarsData, setstarwarsData] = useState({});
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios.get(starwarsApi)
      .then(response => {
        setstarwarsData(response.data);
      })
      .catch(error => {
        console.log("PROBLEMS!")
      });
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWars 
        Name={starwarsData.name}
        Image={starwarsData.url}
        Gender={starwarsData.gender}
      />
    </div>
  );

}

export default App;
