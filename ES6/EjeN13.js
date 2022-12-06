/*
Utilice la asignación de desestructuración con el parámetro Rest
 para reasignar elementos de matriz
En algunas situaciones que involucran la desestructuración de 
arreglos, es posible que deseemos recopilar el resto de los 
elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra
 a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostraría los valores 1, 2y [3, 4, 5, 7].

Variables ay btome el primer y segundo valor de la matriz. 
Después de eso, debido a la presencia del parámetro rest, 
arrobtiene el resto de los valores en forma de matriz.
 El elemento resto solo funciona correctamente como última 
 variable de la lista. Como en, no puede usar el parámetro rest 
 para capturar un subarreglo que omite el último elemento del 
 arreglo original.

Use una asignación de desestructuración con el parámetro rest 
para emular el comportamiento de Array.prototype.slice(). removeFirstTwo()debe devolver un subarreglo del arreglo original listcon los primeros dos elementos omitidos.

removeFirstTwo([1, 2, 3, 4, 5])debiera ser[3, 4, 5]
- removeFirstTwo()no debe modificarlist
- Array.slice()No debería ser usado.
- Se listdebe utilizar la desestructuración.
*/
function removeFirstTwo(list) {
  
    const [, , ...shorterList] = list; 
    
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);