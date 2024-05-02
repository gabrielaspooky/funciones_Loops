
// 1.- 
//         1.1.- Itera del 0 al 10 usando un bucle "for" e imprime cada número por consola.

for (let numberList = 0; numberList < 11; numberList++) {
    console.log(numberList);
  }

//         1.2.-  Haz lo mismo con un bucle "while".

numberList = 0;
while (numberList < 11) {
    numberList++
  console.log(numberList-1);
}

//         1.3.- Haz lo mismo del 83 al 24 (bucle "for" y bucle "while").

for (let numberList = 83; numberList >= 24; numberList--) {
console.log("Lista de números del 83 al 24: " + numberList);
}

//

numberList = 84
while (numberList >=25) {
    numberList--
    console.log("Lista de números del 83 al 24: " + numberList);
}

// 2.- Crea la variable "num" y haz que un bucle "for" imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiendo el siguiente formato:

// num x 0 = 0
// num x 1 = num * 1
// num x 2 = num * 2
// etc...

for (let num = 0; num * 2 <= 20; num++) {
    console.log("2 x " + num + " = " + num * 2);
}


// 3.- Imprime por consola el siguiente patrón:
//  i    i**2   i**3
//  ----------------- Lo de abajo---------------
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000


// 4.- Imprime por consola, , la suma de todos los números del 0 al 10.

for (let num = 0; num * 2 <= 20; num++) {
    console.log("2 x " + num + " = " + num * 2);
}

// 5.-
//          5.1.- Imprime por consola los números del 0 hasta el 100, pero sólo los que estén comprendidos entre el 10 y 23, entre el 56 y 62.
//          5.2.- Luego haz otro log que muestre solo los números divisibles entre 5 o 7.

// 6.- Pídele al usuario que introduzca un número e imprime por consola: "La suma de todos los números pares del 0 al <<num>> es <<result>>, y la suma de todos los números impares del 0 al <<num>> es <<result>>."

// 7.- Imprime el siguiente patrón por consola:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let patron = 1; patron <=7; patron++) {
    console.log("#".repeat(patron));
}

// 8.- Imprime por consola el siguiente patrón:
//                ##
//             ####
//          ######
//        ########
//      ##########
//    ############
// ##############
//   ############
//     ##########
//       ########
//        ######
//          ####
//            ##

for (let patronIncremento = 0; patronIncremento <=6; patronIncremento++) {
    console.log("#".repeat(patronIncremento*2));
}
for (let patronDecremento = 7; patronDecremento >=0; patronDecremento--) {
    console.log("#".repeat(patronDecremento*2));
    
}