const vehicleFieldsParse = {
    "cargo_capacity": "capacidad_de_carga",
    "consumables": "consumibles",
    "cost_in_credits": "costo_en_creditos",
    "created": "creado",
    "crew": "tripulacion",
    "edited": "editado",
    "length": "longitud",
    "manufacturer": "fabricante",
    "max_atmosphering_speed": "maxima_velocidad_atmosferica",
    "model": "modelo",
    "name": "nombre",
    "passengers": "pasajeros",
    "pilots": "pilotos",
    "films": "peliculas",
    "url": "url",
    "vehicle_class": "clase_de_vehiculo"

}

const vehicleParse = (vehicle) => {
    
    return Object.keys(vehicle).reduce((obj, field) => {
    
        const parse_field = vehicleFieldsParse[field];
        obj[parse_field] = vehicle[field];
        return obj;
    }, {});
};

exports.vehicleParse = vehicleParse;