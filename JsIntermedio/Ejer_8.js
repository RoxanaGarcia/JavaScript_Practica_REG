/*
Implementar mapa en un prototipo
Como ha visto al aplicar Array.prototype.map(), o simplemente map()antes, 
el mapmétodo devuelve una matriz de la misma longitud que la que se invocó. 
Tampoco altera la matriz original, siempre que su función de devolución de
 llamada no lo haga.

En otras palabras, mapes una función pura y su salida depende únicamente de 
sus entradas. Además, toma otra función como argumento.

Puede aprender mucho sobre el mapmétodo si implementa su propia versión. 
Se recomienda utilizar un forbucle o Array.prototype.forEach().

Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse 
exactamente como Array.prototype.map(). No debe utilizar el map método 
incorporado. Se Array puede acceder a la instancia en el myMapmétodo 
usando this.

[23, 65, 98, 5, 13].myMap(item => item * 2)debe igualar 
[46, 130, 196, 10, 26].
Su código no debe usar el map método.
*/
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
      }
    return newArray;
  };