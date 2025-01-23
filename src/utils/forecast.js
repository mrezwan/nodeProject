const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.weatherstack.com/current?access_key=17e1038490a6d7544a63a728caa20400&query=' +
    latitude +
    ', ' +
    longitude +
    '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather service', undefined);
    } else if (body.error) {
      callback('Location service is not available', undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature}°C out, but it feels like ${body.current.feelslike}°C and humidity ${body.current.humidity} There is a ${body.current.precip}% chance of rain, The local time is ${body.location.lacaltime}`
      );
    }
  });
};

module.exports = forecast;

// const add = (a, b, callback) => {
//   setTimeout(() => {
//    const sum = a + b;
//    callback(sum)
//   }, 2000);
//   callback(sum);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });
