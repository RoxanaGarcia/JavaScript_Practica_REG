/*Palabras en blanco
Se le proporcionan oraciones con algunas palabras faltantes, como sustantivos, 
verbos, adjetivos y adverbios. Luego completa las piezas que faltan con palabras de su 
elección de manera que la oración completa tenga sentido.

Considere esta oración: Fue realmente ____ , y nosotros ____ nosotros mismos ____ . 
A esta oración le faltan tres piezas: un adjetivo, un verbo y un adverbio, y podemos agregar 
palabras de nuestra elección para completarla. 
Entonces podemos asignar la oración completa a una variable de la siguiente manera:
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. 
Debe formar una oración completa con las palabras que elija, junto con las palabras que proporcionamos.

Necesitará usar el operador de concatenación de cadenas +para construir una nueva cadena, 
usando las variables provistas: myNoun, myAdjective, myVerby myAdverb. A continuación, 
asignará la cadena formada a la wordBlanksvariable. No debe cambiar las palabras asignadas a las variables.

También deberá tener en cuenta los espacios en su cadena, de modo que la oración final tenga 
espacios entre todas las palabras. El resultado debe ser una oración completa.

wordBlanksdebe ser una cadena
No debe cambiar los valores asignados a myNoun, myVerbo .myAdjectivemyAdverb
esperando :No debe usar directamente los valores dog, ran, bigo quicklypara crear wordBlanks.
wordBlanksdebe contener todas las palabras asignadas a las variables myNoun,
 myVerby separadas myAdjectivepor myAdverbcaracteres que no sean palabras 
 (y cualquier palabra adicional de su elección).

*/
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 