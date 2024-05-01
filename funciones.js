// 1.- Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3. Puedes usar prompts para los datos (opcional) y la consola del navegador para comprobar el resultado.

function rectangleSides()
{
    let rectangleSideWidth = prompt("¿Cuánto mide tu rectángulo de ancho?");
    let rectangleSideLength = prompt("¿Cuánto mide tu rectángulo de largo?");
    let rectangleArea = `${rectangleSideWidth}` * `${rectangleSideLength}`;
    
    alert(`El área de tu rectángulo equivale a ${rectangleArea} metros al cuadrado`);

   
}

rectangleSides()

// 2.- Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

function temperatureConverter() 
{
let celsiusTemperature = prompt("Dime la temperatura en grados Celsius");
let fahrenheitTemperature = `${celsiusTemperature}` * 9/5 + 32;
alert(`${celsiusTemperature}°C es igual a: ${fahrenheitTemperature}°F`)
}


temperatureConverter()

// 3.- Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().

function randomNumber(minimum, maximum) {
    return (Math.floor(Math.random() * (maximum - minimum + 1) + minimum)); // Se usa el método Math.floor adicionalmente, con la finalidad de que la función evite devolver decimales.
    
}
randomNumber (5, 15)

// 4.- Escribe una función que calcule el área de un círculo si se le proporciona el radio.

function circleArea() {
let circleRadius = prompt("¿Cuál es el radio de tu circunferencia");
const circleAreaResult = Math.PI * (circleRadius * circleRadius); // Utilizo la propiedad Math.PI a modo de abreviación del 3,14 //

    alert(`El área de tu círculo es igual a ${circleAreaResult}`);
} 

circleArea()


// // 5.- Escribe una función que te adivine el futuro. Recibirá como parámetros:
// Número de hijos.
// Nombre de la pareja.
// Nombre de una ciudad.
// Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello.

function generateFuture() { 

    let NumberOfSons = [12, 8, 7, 9, 11];

    let randomNumber = Math.floor(Math.random() * NumberOfSons.length); 

    let sonsNumber = NumberOfSons[randomNumber];

    let randomNamesforPartner = ['Al Pacino', 'Will Smith', 'Zac Efron', 'Angelina Jolie', 'Robert Downey Jr.'];

    let randomNames = Math.floor(Math.random() * randomNamesforPartner.length); 

    let partnerName = randomNamesforPartner[randomNames];

    let randomCity = ['Ciudad Ojeda', 'Cabimas', 'Maracaibo', 'Machiques', 'Mene Grande', 'Los Puertos de Altagracia'];

    let cities = Math.floor(Math.random() * randomCity.length);  

    let finalCity = randomCity[cities];

    let randomJob = ['Enchufado', 'Dirigente estudiantil', 'Repartidor del CLAP', 'Coyote', 'Dependiente en negocio tapadera'];

    let availableJobs = Math.floor(Math.random() * randomJob.length);  

    let finalJob = randomJob[availableJobs];

return alert(`Trabajarás en ${finalCity}, trabajando como ${finalJob} y tendrás ${sonsNumber} hij@s con ${partnerName}`)
    
}

generateFuture()