/*Agregar pares de clave-valor a objetos de JavaScript
En su forma más básica, los objetos son solo colecciones de pares 
clave-valor . En otras palabras, son piezas de datos ( valores ) asignados a identificadores únicos llamados propiedades ( claves ). Echa un vistazo a un ejemplo:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
El código anterior define un objeto de personaje de videojuego 
de Tekken llamado tekkenCharacter. Tiene tres propiedades, cada una de las cuales se asigna a un valor específico. Si desea agregar una propiedad adicional, como "origen", puede hacerlo asignando original objeto:

tekkenCharacter.origin = 'South Korea';
Esto usa la notación de puntos. Si tuviera que observar el
 tekkenCharacterobjeto, ahora incluirá la originpropiedad. 
 Hwoarang también tenía un cabello anaranjado distintivo. 
 Puede agregar esta propiedad con notación de corchetes haciendo:

tekkenCharacter['hair color'] = 'dyed orange';
Se requiere la notación entre paréntesis si su propiedad 
tiene un espacio o si desea usar una variable para nombrar 
la propiedad. En el caso anterior, la propiedad está entre comillas para indicarla como una cadena y se agregará exactamente como se muestra. Sin comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable. He aquí un ejemplo con una variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
Después de agregar todos los ejemplos, el objeto se verá así:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
Se foodsha creado un objeto con tres entradas. Usando la sintaxis de su elección, agregue tres entradas más: bananascon un valor de 13, grapescon un valor de 35y strawberriescon un valor de 27.
- foodsdebe ser un objeto.
- El foodsobjeto debe tener una clave bananascon un valor de 13.
- El foodsobjeto debe tener una clave grapescon un valor de 35.
- El foodsobjeto debe tener una clave strawberriescon un valor de 27.
- Los pares clave-valor deben establecerse mediante la notación de puntos o corchetes.
*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;
  
  console.log(foods);