const pool = require('../../db/database.js');
const {existsSpeciesQuery, insertSpecieQuery, getSpecieQuery} = require('../../db/queries.js');

module.exports.createSpecie = exports.handler = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false; 

  const body = JSON.parse(event.body);
  const specieData = body;
  const {name, average_height, average_lifespan, classification,  designation, eye_colors,  hair_colors,  homeworld, language, people, films, skin_colors, url} = specieData;
  let statusCode, message;
  const data = await pool.query(existsSpeciesQuery(name));
  const {exists} = data[0];
  
  if(exists){
    statusCode = 409;
    message = "already exists";
    
  } else {

    const newSpecie = {
        name, average_height, average_lifespan, classification,  designation, eye_colors,  hair_colors,  homeworld, language, people: JSON.stringify(people), films: JSON.stringify(films), skin_colors, url
    };

    const response = await pool.query(insertSpecieQuery, newSpecie);

    statusCode = 201;
    message = "Created";
  
  }
  
  return {
    statusCode,
    body: JSON.stringify({message})
    
  };
  
};

module.exports.getSaveSpecie = exports.handler = async (event, context) => {  

    const response = await pool.query(getSpecieQuery);

    return {
        statusCode: 200,
        body: JSON.stringify({response})
    
    };
};