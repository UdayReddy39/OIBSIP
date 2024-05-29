function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  var resultArea = document.getElementById("resultArea");

  if (unitSelect === "celsius") {
    var fahrenheit = (parseFloat(temperatureInput) * 9 / 5) + 32;
    var kelvin = parseFloat(temperatureInput) + 273.15;
    resultArea.innerHTML = temperatureInput + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit / " + kelvin.toFixed(2) + " Kelvin";
  } else if (unitSelect === "fahrenheit") {
    var celsius = (parseFloat(temperatureInput) - 32) * 5 / 9;
    var kelvin = (parseFloat(temperatureInput) - 32) * 5 / 9 + 273.15;
    resultArea.innerHTML = temperatureInput + " Fahrenheit = " + celsius.toFixed(2) + " Celsius / " + kelvin.toFixed(2) + " Kelvin";
  } else if (unitSelect === "kelvin") {
    var celsius = parseFloat(temperatureInput) - 273.15;
    var fahrenheit = (parseFloat(temperatureInput) - 273.15) * 9 / 5 + 32;
    resultArea.innerHTML = temperatureInput + " Kelvin = " + celsius.toFixed(2) + " Celsius / " + fahrenheit.toFixed(2) + " Fahrenheit";
  }
}
