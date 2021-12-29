'use strict';

const axios = require('axios');
const {SWAPI_GET_ALL_VEHICLE_URL, SWAPI_GET_VEHICLE_URL} =  require('./apiConfig.js');
const {vehicleParse} = require("./model.js");

const getUrl = (idVehicle) => {
    return  idVehicle? SWAPI_GET_VEHICLE_URL(idVehicle) : SWAPI_GET_ALL_VEHICLE_URL;
}

module.exports.listVehicle =  async (event) => {
    
    const {vehicleId} = event.pathParameters ? event.pathParameters: {vehicleId:''};

    const vehicleAPIUrl = getUrl(vehicleId);
    const params = {
        "params": {"format": "json", ...event.queryStringParameters  }
    }

    try{
        let data;
        const response = await axios.get(vehicleAPIUrl, params);

        if (vehicleId){

            data  = vehicleParse(response.data);
            

        } else {
            response.data.results = response.data.results.map(people => (vehicleParse(people)));
            data  = response.data;
        }
        
        return {

            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(data)
        };

  } catch (error){
       
        return {
            'statusCode': error.response.status,
            'body': JSON.stringify( error.response.statusText)
        };
       
  }
};

module.exports.getUrl = getUrl;