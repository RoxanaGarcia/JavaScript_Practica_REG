/*Utilice la asignación de desestructuración para asignar variables de objetos
La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. 
Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del último ejemplo:

const user = { name: 'John Doe', age: 34 };
Así es como puede dar nuevos nombres de variables en la tarea:

const { name: userName, age: userAge } = user;
Puede leerlo como "obtener el valor de user.namey asignarlo a una nueva variable llamada userName" 
y así sucesivamente. El valor de userNamesería la cadena John Doey el valor de userAgesería el número 34.

Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar 
las variables highTodayy highTomorrowlos valores de todayy tomorrowdesde el HIGH_TEMPERATURESobjeto.

Debe eliminar la sintaxis de asignación de ES5.
- Debe utilizar la desestructuración para crear la highTodayvariable.
- Debe utilizar la desestructuración para crear la highTomorrowvariable.
- highTodaydebe ser igual a 77y highTomorrowdebe ser igual a 80.
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday); 
  console.log(highTomorrow); 