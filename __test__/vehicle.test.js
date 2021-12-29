const { test, expect } = require('@jest/globals');
const models = require('../src/vehicle/model.js');
const handler = require('../src/vehicle/handler.js');
const {SWAPI_GET_ALL_VEHICLE_URL, SWAPI_GET_VEHICLE_URL} = require('../src/vehicle/apiConfig.js');

test('correct field parse',  () => {

    const vehicle = {
        "cargo_capacity": "fakeInfo",
        "consumables": "fakeInfo",
        "cost_in_credits": "fakeInfo",
        "created": "fakeInfo",
        "crew": "fakeInfo",
        "edited": "fakeInfo",
        "length": "fakeInfo",
        "manufacturer": "fakeInfo",
        "max_atmosphering_speed": "fakeInfo",
        "model": "fakeInfo",
        "name": "fakeInfo",
        "passengers": "fakeInfo",
        "pilots": "fakeInfo",
        "films": "fakeInfo",
        "url": "fakeInfo",
        "vehicle_class": "fakeInfo"
    }

    const parseFields =  Object.keys(models.vehicleParse(vehicle))
    expect(parseFields).toContain("capacidad_de_carga");
    expect(parseFields).toContain("consumibles");
    expect(parseFields).toContain("costo_en_creditos");
    expect(parseFields).toContain("creadito");
    expect(parseFields).toContain("tripulacion");
    expect(parseFields).toContain("editado");
    expect(parseFields).toContain("longitud");
    expect(parseFields).toContain("fabricante");
    expect(parseFields).toContain("maxima_velocidad_atmosferica");
    expect(parseFields).toContain("modelo");
    expect(parseFields).toContain("nombre");
    expect(parseFields).toContain("pasajeros");
    expect(parseFields).toContain("pilotos");
    expect(parseFields).toContain("peliculas");
    expect(parseFields).toContain("url");
    expect(parseFields).toContain("clase_de_vehiculo");

});

test('when no pass queryparams get all URL', () => {
    expect(handler.getUrl('')).toBe(SWAPI_GET_ALL_VEHICLE_URL);
});

test('when pass queryparams get vehicle URL', () => {
    params = 16;

    expect(handler.getUrl(params)).toBe(SWAPI_GET_VEHICLE_URL(params));
});