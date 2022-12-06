/*
Implementar el método de filtro en un prototipo
Puede aprender mucho sobre el filtermétodo si implementa su propia versión.
 Se recomienda utilizar un forbucle o Array.prototype.forEach().

 Prueba
Escribe el tuyo propio Array.prototype.myFilter(), que debería comportarse 
exactamente como Array.prototype.filter(). No debe utilizar el filtermétodo
 incorporado. Se Arraypuede acceder a la instancia en el myFiltermétodo 
 usando this.

 [23, 65, 98, 5, 13].myFilter(item => item % 2)debe igualar [23, 65, 5, 13].
Su código no debe usar el filtermétodo.
*/
Array.prototype.myFilter = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) == true) {
        newArray.push(this[i]);
      }
    }

    return newArray;
  };