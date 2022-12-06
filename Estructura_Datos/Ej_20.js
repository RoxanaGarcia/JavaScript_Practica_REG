/*
Modificar una matriz almacenada en un objeto
Ahora ha visto todas las operaciones básicas para los objetos de
 JavaScript. Puede agregar, modificar y eliminar pares clave-valor,
  verificar si existen claves e iterar sobre todas las claves en un objeto. A medida que continúe aprendiendo JavaScript, verá aplicaciones de objetos aún más versátiles. Además, las lecciones de Estructuras de datos ubicadas en la sección Preparación para la entrevista de codificación del plan de estudios también cubren los objetos ES6 Map y Set , los cuales son similares a los objetos ordinarios pero brindan algunas características adicionales. Ahora que ha aprendido los conceptos básicos de matrices y objetos, ¡está completamente preparado para comenzar a abordar problemas más complejos usando JavaScript!

Eche un vistazo al objeto que hemos proporcionado en el editor de 
código. El userobjeto contiene tres llaves. La dataclave contiene 
cinco claves, una de las cuales contiene una matriz de friends. 
A partir de esto, puede ver cuán flexibles son los objetos como 
estructuras de datos. Hemos comenzado a escribir una función 
addFriend. Termine de escribirlo para que tome un userobjeto y 
agregue el nombre del friendargumento a la matriz almacenada 
user.data.friendsy devuelva esa matriz.
 El userobjeto debe tener las claves name, agey .data
- La addFriendfunción debe aceptar un userobjeto y una friendcadena como argumentos y agregar el amigo a la matriz del friendsobjeto user.
- addFriend(user, "Pete")["Sam", "Kira", "Tomo", "Pete"]debería volver
*/
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));