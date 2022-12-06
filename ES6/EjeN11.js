/*
Utilice la asignación de desestructuración para asignar variables de objetos anidados
Puede usar los mismos principios de las dos lecciones anteriores para desestructurar valores de 
objetos anidados.

Usando un objeto similar a los ejemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Aquí se explica cómo extraer los valores de las propiedades del objeto y asignarlos a variables con 
el mismo nombre:

const { johnDoe: { age, email }} = user;
Y así es como puede asignar los valores de las propiedades de un objeto a las variables con diferentes 
nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;
Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar 
las variables lowTodayy highTodaylos valores de today.lowy today.highdesde el LOCAL_FORECASTobjeto.
Debe eliminar la sintaxis de asignación de ES5.
- Debe utilizar la desestructuración para crear la lowTodayvariable.
- Debe utilizar la desestructuración para crear la highTodayvariable.
- lowTodaydebe ser igual a 64y highTodaydebe ser igual a 77.

*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  