/*const  peopleFieldsParse  = {
    
    "name" : "nombre",
    "birth_year" : "fecha_nacimiento",
    "eye_color" : "color_ojo",
    "gender" : "genero",
    "hair_color" : "color_pelo",
    "height" : "altura",
    "mass" : "masa",
    "skin_color" : "color_piel",
    "homeworld" : "mundo_natal",
    "films" : "peliculas",
    "species" : "especies",
    "starships" : "naves_estelares",
    "vehicles" : "vehiculos",
    "url" : "url",
    "created" : "creado",
    "edited" : "editado"
};


const peopleParse = (people) => {
    
    return Object.keys(people).reduce((obj, field) => {
    
        const parse_field = peopleFieldsParse[field];
        obj[parse_field] = people[field];
        return obj;
    }, {});
};

exports.peopleParse = peopleParse;*/

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