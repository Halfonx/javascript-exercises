const convertToCelsius = function(temperature) {
  let celsiusTemperature = (temperature - 32) * (5 / 9);
   celsiusTemperature = parseFloat(celsiusTemperature = celsiusTemperature.toFixed(1));
  return celsiusTemperature;
};

const convertToFahrenheit = function(temperature) {
  let farenheitTemperature = (temperature * (9/5)) + 32;
  farenheitTemperature = parseFloat(farenheitTemperature = farenheitTemperature.toFixed(1));
  return farenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
