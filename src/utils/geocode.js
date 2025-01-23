const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?&access_token=pk.eyJ1IjoibXJlendhbiIsImEiOiJjbTVjcDYydzM0bDZrMnFwN29hYmQ2cXk4In0.m-OH_sZqYTqSpudwmVL9Cg';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location srvice!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[1],
        longitude: body.features[0].geometry.coordinates[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
