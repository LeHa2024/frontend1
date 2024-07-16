function celsiusToFahrenheit(tempC) {
  var tempF = (tempC * 9) / 5 + 32;
  return tempF;
}
var celsius = prompt("Nhập giá trị cho a:");
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(
  celsius + " độ Celsius tương ứng với " + fahrenheit + " độ Fahrenheit."
);
