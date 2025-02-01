/* alert("Bienvenido a nuetra Web");
let nombre = Lua
let edad = 25
let numeroVentas = 25
let saldoDisponible = 1000 */
alert("¡Error! Completa todos los datos");
let mensajeDeError = "¡Error! Completa todos los datos";
alert(mensajeDeError);

let nombreUsuario = prompt("Por favor, ingresa tu nombre");
let saludo = prompt ("¡Hola, " + nombreUsuario + "!");
console.log(nombreUsuario);
//alert("Ingrese su edad");//
let edad = prompt("Por favor, ingresa tu edad");
console.log(edad);
if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!.Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección");
} else {
    alert("¡No puedes obtener tu licencia de conducir!.Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección");
}