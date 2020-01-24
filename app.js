const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {

        alias: 'd',
        desc: 'Direccion de ciudad para obtener el clima',
        demmand: true

    }

}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
.then(console.log);



clima.getCLima(-33.459999, -70.639999)
    .then(console.log)
    .catch(console.log);
    */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getCLima(coords.lat, coords.lng);
        return `El clima de la ciudad ${direccion} es de ${temp}.`
    } catch (e) {

        return `No se puedo determinar el clima de ${direccion}`;


    }







}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)