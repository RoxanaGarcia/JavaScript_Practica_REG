/*
Pasar argumentos para evitar la dependencia externa en una función
El último desafío fue un paso más cerca de los principios de la programación 
funcional, pero todavía falta algo.

No modificamos el valor de la variable global, pero la función incrementer no 
funcionaría sin la variable global fixedValuepresente.

Otro principio de la programación funcional es declarar siempre tus 
dependencias explícitamente. Esto significa que si una función depende de la
 presencia de una variable u objeto, pase esa variable u objeto directamente 
 a la función como argumento.

Hay varias buenas consecuencias de este principio. La función es más fácil 
de probar, sabe exactamente qué entrada necesita y no dependerá de nada más 
en su programa.

Esto puede brindarle más confianza cuando modifica, elimina o agrega código 
nuevo. Sabría lo que puede o no puede cambiar y puede ver dónde están las 
trampas potenciales.

Finalmente, la función siempre produciría la misma salida para el mismo 
conjunto de entradas, sin importar qué parte del código la ejecute.

Actualicemos la incrementer función para declarar claramente sus dependencias.

Prueba
*Escriba la incrementer función para que tome un argumento y 
luego devuelva un resultado después de aumentar el valor en uno.

-Su función incrementerno debe cambiar el valor de fixedValue(que es 4).
-Su incrementerfunción debe tomar un argumento.
-Su incrementerfunción debe devolver un valor que sea uno más grande que el fixedValuevalor.


*/
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(value) {
  return value + 1;

  // Add your code above this line
}

var Valor_increment = incrementer(fixedValue); 
console.log(Valor_increment); 
//console.log(fixedValue);