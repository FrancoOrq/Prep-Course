// Do not change any of the function names

const { stringify } = require("git-url-parse");

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var cambiarLetra = nombre[0].toUpperCase();
  var restoPalabra = nombre.slice(1);
  var palabraCompleta = cambiarLetra + restoPalabra;
  return palabraCompleta;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb(cb);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código: var numeros = [2,3,4,4,5] 
  var suma = numeros.reduce(function(suma,cb) {
    return suma + cb;
  });
  cb(suma);
  }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(cb);
 
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray =  array.map(function(elemento){
 return cb(elemento)
  });
  return nuevoArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
return array.filter(function(str){
  return str[0] === "a";
 });
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
