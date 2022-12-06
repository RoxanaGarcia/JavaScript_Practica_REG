/*
Devolver una matriz ordenada sin cambiar la matriz original
Un efecto secundario del sortmétodo es que cambia el orden de los elementos en la matriz original.
 En otras palabras, muta la matriz en su lugar. 
Una forma de evitar esto es concatenar primero una matriz vacía con la que se está ordenando 
(recuerde eso slicey concatdevuelva una nueva matriz), luego ejecute el sortmétodo.

Prueba
Utilice el sort método de la nonMutatingSort función para ordenar los elementos de una matriz en orden
 ascendente. La función debe devolver una nueva matriz y no mutar la globalArray variable.

Su código debe usar el sortmétodo.
- La globalArrayvariable no debe cambiar.
- nonMutatingSort(globalArray)[2, 3, 5, 6, 9]debería volver
- nonMutatingSort(globalArray)no debe estar codificado.
- La función debe devolver una nueva matriz, no la matriz que se le pasó.
- nonMutatingSort([1, 30, 4, 21, 100000])[1, 4, 21, 30, 100000]debería volver
- nonMutatingSort([140000, 104, 99])[99, 104, 140000]debería volver
*/


var globalArray = [5, 6, 3, 2, 9];
//var globalArray = [1, 30, 4, 21, 100000];
//var globalArray =[140000, 104, 99];
function nonMutatingSort(arr) {
  
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  
}
console.log(nonMutatingSort(globalArray));