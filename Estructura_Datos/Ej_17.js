/*Comprobar si un objeto tiene una propiedad
Ahora podemos agregar, modificar y eliminar claves de objetos. 
Pero, ¿y si solo quisiéramos saber si un objeto tiene una 
propiedad específica? 
JavaScript nos proporciona dos formas diferentes de hacer esto. 
Uno usa el hasOwnProperty()método y el otro usa la inpalabra clave. Si tenemos un objeto userscon una propiedad de Alan, podemos verificar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos regresarían true.

Termine de escribir la función para que regrese truesi el 
objeto que se le pasó contiene los cuatro nombres, , Alany regresa de lo contrario.JeffSarahRyanfalse

No users se debe acceder directamente al objeto.
- El usersobjeto solo debe contener las claves Alan, Jeff, SarahyRyan
- La función isEveryoneHeredebe devolver truesi Alan, Jeff, Sarahy Ryanson propiedades del objeto que se le pasa.
- La función isEveryoneHeredebería regresar falsesi Alanno es una propiedad en el objeto que se le pasó.
- La función isEveryoneHeredebería regresar falsesi Jeffno es una propiedad en el objeto que se le pasó.
- La función isEveryoneHeredebería regresar falsesi Sarahno es una propiedad en el objeto que se le pasó.
- La función isEveryoneHeredebería regresar falsesi Ryanno es una propiedad en el objeto que se le pasó.

*/
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
  
  console.log(isEveryoneHere(users));