/*
Refactorizar variables globales fuera de funciones
Hasta ahora, hemos visto dos principios distintos para la programación 
funcional:

1- No altere una variable u objeto: cree nuevas variables y objetos y 
devuélvalos si es necesario desde una función. Sugerencia: usar algo como 
const newArr = arrVar, where arrVaris a array simplemente creará una 
referencia a la variable existente y no una copia. Entonces, cambiar 
un valor en newArrcambiaría el valor en arrVar.

Declarar parámetros de función: cualquier cálculo dentro de una función 
depende solo de los argumentos pasados ​​a la función, y no de ningún objeto
 o variable global.

Sumar uno a un número no es muy emocionante, pero podemos aplicar estos
 principios cuando trabajamos con matrices u objetos más complejos.

Vuelva a escribir el código para que la matriz global bookListno cambie
dentro de ninguna función. La addfunción debe agregar lo dado bookName al final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.

Prueba
Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo 
debe agregarse antes del bookNameparámetro.

bookListno debe cambiar y seguir siendo igual ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
* add(bookList, "A Brief History of Time")["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]debería volver
* remove(bookList, "On The Electrodynamics of Moving Bodies")["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]debería volver
* remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");debe igualar ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(list, bookName) {
return [...list, bookName];
}
function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}
var nuev1BookList = add(bookList, 'A Brief History of Time');
var nuev2BookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var nuev3BookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);