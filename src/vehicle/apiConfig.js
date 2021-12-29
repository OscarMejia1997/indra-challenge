const  SWAPI_GET_ALL_VEHICLE_URL = "https://swapi.py4e.com/api/vehicles/";
const  SWAPI_GET_VEHICLE_URL = (idVehicle) => (`https://swapi.py4e.com/api/vehicles/${idVehicle}/?format=json`);

exports.SWAPI_GET_ALL_VEHICLE_URL = SWAPI_GET_ALL_VEHICLE_URL;
exports.SWAPI_GET_VEHICLE_URL = SWAPI_GET_VEHICLE_URL;