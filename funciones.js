// 1.- Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3. Puedes usar prompts para los datos (opcional) y la consola del navegador para comprobar el resultado.

// 2.- Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

function temperatureConverter() 
{
let celsiusTemperature = prompt("Dime la temperatura en grados Celsius");
let fahrenheitTemperature = `${celsiusTemperature}` * 9/5 + 32;
alert(`${celsiusTemperature}°C es igual a: ${fahrenheitTemperature}°F`)
}


temperatureConverter()

3.- Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().

4.- Escribe una función que calcule el área de un círculo si se le proporciona el radio.

5.- Escribe una función que te adivine el futuro. Recibirá como parámetros:
Número de hijos.
Nombre de la pareja.
Nombre de una ciudad.
Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello.