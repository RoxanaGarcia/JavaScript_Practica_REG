/*Use la sintaxis de clase para definir una función constructora 

ES6 proporciona una nueva sintaxis para crear objetos, utilizando la palabra clave class .

Cabe señalar que el classla sintaxis es solo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, se puede crear un objeto definiendo un constructorfunción y usando el newpalabra clave para instanciar el objeto.

En ES6, un classdeclaración tiene un constructormétodo que se invoca con el newpalabra clave. Si el constructormétodo no está explícitamente definido, entonces está implícitamente definido sin argumentos.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

Cabe señalar que el classpalabra clave declara una nueva función, a la que se añade un constructor. 
Este constructor se invoca cuando newse llama para crear un nuevo objeto.

Nota: UpperCamelCase debe usarse por convención para los nombres de clase ES6, como en SpaceShuttleusado 
arriba.

los constructormethod es un método especial para crear e inicializar un objeto creado con una clase. 
Aprenderá más al respecto en la sección de Programación Orientada a Objetos de la Certificación de 
Estructuras de Datos y Algoritmos de JavaScript.

Utilizar el classpalabra clave y escribir una constructorpara crear el Vegetableclase.

los Vegetableclass te permite crear un objeto vegetal con una propiedad nameque se pasa al constructor.
Vegetabledebería ser un classcon un definido constructormétodo.
-  El classdebe usarse la palabra clave.
-  Vegetabledebe poder ser instanciado.
-  carrot.namedebería volver carrot. 
*/
class Vegetable{
    constructor(name){
      this.name=name;
    }
  }
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 
