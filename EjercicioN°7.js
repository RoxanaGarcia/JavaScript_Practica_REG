/*Comprender las variables no inicializadas
Cuando se declaran variables de JavaScript, tienen un valor inicial de undefined. Si realiza una operación matemática en una undefinedvariable, su resultado será lo NaNque significa "No es un número" . Si concatena una cadena con una undefinedvariable, obtendrá una cadena de undefined.

Inicialice las tres variables a, b, y ccon 5, 10y "I am a"respectivamente para que no sean undefined.

a debe definirse y tener un valor final de 6.
b debe definirse y tener un valor final de 15.
c no debe contener undefinedy debe tener un valor final de la cadenaI am a String!
No debe cambiar el código debajo del comentario especificado.*/

// Only change code below this line
var a =6;
a=5;
var b;
b=10;
var c;
c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";