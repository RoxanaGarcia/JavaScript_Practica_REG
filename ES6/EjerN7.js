/*
Usar el parámetro Rest con parámetros de función
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro de descanso para los parámetros de función. Con el parámetro rest,
 puede crear funciones que toman un número variable de argumentos. Estos argumentos se almacenan en 
 una matriz a la que se puede acceder más tarde desde dentro de la función.

Mira este código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
La consola mostraría las cadenas You have passed 3 arguments.y You have passed 4 arguments..

El parámetro rest elimina la necesidad de verificar la argsmatriz y nos permite aplicar map(), 
filter()y reduce()en la matriz de parámetros.

Modifique la función sumusando el parámetro rest de tal manera que la función sumpueda tomar cualquier
 cantidad de argumentos y devolver su suma.
 El resultado de sum(0,1,2)debe ser 3
- El resultado de sum(1,2,3,4)debe ser 10
- El resultado de sum(5)debe ser 5
- El resultado de sum()debe ser 0
- sumdebe ser una función de flecha que use la sintaxis de parámetro de descanso ( ...) en el argsparámetro.
*/
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); 
  console.log(sum(0, 1, 2));
  console.log(sum(1,2,3,4));
  console.log (sum( ));
  console.log(sum(1, 2, 3));  