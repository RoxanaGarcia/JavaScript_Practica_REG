/*
Devolver parte de una matriz usando el método de corte
El slice método devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos,
 el primero proporciona el índice de dónde comenzar el segmento, el segundo es el índice de dónde 
 finalizar el segmento (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado
  es comenzar desde el principio de la matriz hasta el final, que es una manera fácil de hacer una copia 
  de toda la matriz. El slice método no muta la matriz original, sino que devuelve una nueva.

Aquí hay un ejemplo:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
newArraytendría el valor ["Dog", "Tiger"].
Prueba

Use el slicemétodo en la sliceArrayfunción para devolver parte de la anim matriz dados
 los beginSlice y endSlice proporcionados. La función debe devolver una matriz.

Su código debe usar el slice método.
- La inputAnim variable no debe cambiar.
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)["Dog", "Tiger"]debería volver
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)["Cat"]debería volver
- sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)["Dog", "Tiger", "Zebra"]debería volver
*/
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);