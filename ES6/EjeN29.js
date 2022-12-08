/*
Manejar una Promesa Rechazada con catch
catches el método utilizado cuando su promesa ha sido rechazada. 
Se ejecuta inmediatamente después de rejectllamar al método 
de una promesa. Aquí está la sintaxis:

myPromise.catch(error => {
  
});
errores el argumento pasado al rejectmétodo.

Agregue el catchmétodo a su promesa. Úselo errorcomo parámetro 
de su función de devolución de llamada e inicie sesión erroren 
la consola.
Debe llamar al catchmétodo en la promesa.
- Su catchmétodo debe tener una función de devolución de llamada errorcomo su parámetro.
- Debe iniciar sesión erroren la consola.
*/
const makeServerRequest = new Promise((resolve, reject) => {
  
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });