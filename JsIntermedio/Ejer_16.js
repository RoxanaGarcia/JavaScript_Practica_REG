/*
Utilice el mapa, filtro o reducción de funciones de orden superior para resolver un problema complejo
Ahora que ha superado algunos desafíos usando funciones de orden superior como map(), filter()y reduce(), 
ahora puede aplicarlas para resolver un desafío más complejo.

Prueba
Complete el código de la squareListfunción usando cualquier combinación de map(), filter()y reduce(). 
La función debe devolver una nueva matriz que contenga los cuadrados de solo los números enteros
 positivos (los números decimales no son enteros) cuando se le pasa una matriz de números reales. 
 Un ejemplo de una matriz de números reales es [-3, 4.8, 5, 3, -3.2].
Nota: Su función no debe usar ningún tipo de bucle o la forfunción .whileforEach() quareListdebería 
ser un function.
- for, while, y forEachno debe utilizarse.
- map, filter, o reducedebe usarse.
- La función debe devolver un array.
- squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])[16, 1764, 36]debería volver
- squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])[9, 100, 49]debería volver
*/
const squareList = arr => {
  
  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);