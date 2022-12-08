/*
Escriba funciones declarativas concisas con ES6 

Al definir funciones dentro de objetos en ES5, tenemos que usar la palabra clave functioncomo sigue:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

Con ES6, puede eliminar el functionpalabra clave y dos puntos juntos al definir funciones en objetos. 
He aquí un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

Refactorizar la función setGeardentro del objeto bicyclepara utilizar la sintaxis abreviada descrita 
anteriormente.
no se debe usar la expresión de función tradicional.
-  setGeardebe ser una función declarativa.
-  bicycle.setGear(48)debería cambiar el gearvalor a 48. 
*/
const bicycle = {
    gear: 2,
    setGear(newGear){
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(48);
  console.log(bicycle.gear);