/*
Cree matrices multidimensionales complejas
¡Impresionante! ¡Acabas de aprender mucho sobre arreglos! 
Esta ha sido una descripción general de nivel bastante alto, y
 hay mucho más que aprender sobre cómo trabajar con arreglos, 
 mucho de lo cual verá en secciones posteriores. Pero antes de 
 pasar a mirar Objetos , echemos un vistazo más y veamos cómo 
 las matrices pueden volverse un poco más complejas que lo que
  hemos visto en desafíos anteriores.
Una de las características más poderosas cuando se piensa en 
arreglos como estructuras de datos es que los arreglos pueden 
contener, o incluso estar completamente compuestos por otros 
arreglos. Hemos visto arreglos que contienen arreglos en desafíos 
anteriores, pero bastante simples. Sin embargo, los arreglos pueden contener una profundidad 
infinita de arreglos que pueden contener otros arreglos, cada uno 
con sus propios niveles arbitrarios de profundidad, y así 
sucesivamente. De esta manera, una matriz puede convertirse muy 
rápidamente en una estructura de datos muy compleja, conocida como
 matriz multidimensional o anidada. Considere el siguiente ejemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
La deepmatriz está anidada a 2 niveles de profundidad. 
Las deepermatrices tienen 3 niveles de profundidad. 
Las deepestmatrices son de 4 niveles y la deepest-est?de 5.

Si bien este ejemplo puede parecer intrincado, este nivel de 
complejidad no es desconocido, ni siquiera inusual, cuando se 
trata de grandes cantidades de datos. Sin embargo, todavía podemos
 acceder muy fácilmente a los niveles más profundos de una matriz
  tan compleja con notación de paréntesis:

console.log(nestedArray[2][1][0][0][0]);
Esto registra la cadena deepest-est?. Y ahora que sabemos dónde 
está ese dato, podemos restablecerlo si lo necesitamos:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
Ahora se registra deeper still.

Hemos definido una variable, myNestedArrayigual a una matriz. 
Modifique myNestedArray, usando cualquier combinación de cadenas , 
números y valores booleanos para los elementos de datos, de modo 
que tenga exactamente cinco niveles de profundidad 
(recuerde, la matriz más externa es el nivel 1).
 En algún lugar del tercer nivel, incluya la cadena deep,
  en el cuarto nivel, incluya la cadena deeper, y en el quinto 
  nivel, incluya la cadena deepest.

 myNestedArraydebe contener solo números, valores booleanos y 
 cadenas como elementos de datos
- myNestedArraydebe tener exactamente 5 niveles de profundidad
- myNestedArraydebe contener exactamente una aparición de la cadena deepen una matriz anidada a 3 niveles de profundidad
- myNestedArraydebe contener exactamente una aparición de la cadena deeperen una matriz anidada de 4 niveles de profundidad
- myNestedArraydebe contener exactamente una ocurrencia de la cadena deepesten una matriz anidada de 5 niveles de profundidad
*/

let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
  ];