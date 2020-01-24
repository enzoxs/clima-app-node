const axios = require('axios');

const getCLima = async(lat, lng) => {

    const resp = await axios.get(` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7db2d7ba84ed78b2012c559985160b65&units=metric `);




    return resp.data.main.temp;

}


module.exports = {

    getCLima

}