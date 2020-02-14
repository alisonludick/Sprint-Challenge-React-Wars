import React from 'react';

const StarWarsCharacter = ({ data }) => {
	return (
		<div className="person">
			<h2>{data.name}</h2>
      {
        data.birth_year !== 'n/a' && data.birth_year !== 'unknown' ?
        <p><b>Birth Year:</b> {data.birth_year}</p> : null
      }
			<p><b>Height:</b> {data.height}</p>
			{
				data.hair_color !== 'n/a' && data.hair_color !== 'none' ? 
					<p><b>Hair Color:</b> {data.hair_color}</p> : null 
			}
			<p><b>Eye Color:</b> {data.eye_color}</p>
			{
				data.gender !== 'n/a' && data.gender !== 'none' ? 
					<p><b>Gender:</b> {data.gender}</p> : null 
			}
		</div>
	)
}

export default StarWarsCharacter;