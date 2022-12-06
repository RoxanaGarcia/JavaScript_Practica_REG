/*
Escribir funciones de flecha con parámetros
Al igual que una función normal, puede pasar argumentos a una función de flecha.

const doubler = (item) => item * 2;
doubler(4);
doubler(4)devolvería el valor 8.

Si una función de flecha tiene un solo parámetro, se pueden omitir los paréntesis que encierran el parámetro.

const doubler = item => item * 2;
Es posible pasar más de un argumento a una función de flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2)devolvería el valor 8.

Vuelva a escribir la myConcatfunción que agrega contenido de arr2para arr1que la función use la sintaxis de función de flecha.
Debe reemplazar la varpalabra clave.
- myConcatdebe ser una variable constante (usando const).
- myConcatdebe ser una función de flecha con dos parámetros
- myConcat()[1, 2, 3, 4, 5]debería volver
- No functionse debe utilizar la palabra clave.
*/
const myConcat = (arr1, arr2)=> {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));