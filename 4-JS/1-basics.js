// IMPORTANTE. Antes de ejecutar código javascript en su computador,
// debe instalar node.js (https://nodejs.org/)

// Este es un comentario de una sola línea
// Esta es la segunda línea de tu comentario

/* 
  Esto de acá
  es un comentario 
  de múltiples
  líneas
*/

// Variables.
var p = 8
var x = 2 // Esto representa la definición de una variable x, asignada con valor 2
var y = 5 // Variable y con valor 5
var z = x + y // Creamos la variable z y le asginamos el resultado de x+y. z=7.

// Tipos de datos básicos
var a1 = 2 // Tipo numérico
var a2 = "Hola mundo!" // Tipo string (cadena de caracteres)
var a3 = false // Tipo booleano (verdadero o falso)
// Los tipos de datos de cada variable se determinan en tiempo de ejecución.
var a4 = NaN
var a5 = 'Este es otro texto almacenado en una nueva variable'

// Funciones: bloques de código que pueden ser llamados. 
// Permiten encapsular y reutilizar secciones de un 
// programa.
// Una función puede o no tener entradas o salidas
function suma(a,b){
  // Acá puedes escribir tantas líneas de código
  // como quieras
  return a+b
}

suma(5,10) // En esta llamada, a vale 5 y b vale 10

console.log("Valor suma:", suma(x,y)) // En esta llamada a=x=2 y b=y=5

// Estructuras de control
// Condicionales: if, else, else if
// Reciben por entrada una sentencia cuyo resultado es un booleano (valor de verdad)
if(x>5){
  console.log("Entré al primer if")
}else if(x>3){
  console.log("Entré al segundo if")
}else{
  console.log("Entré al else")
}

// Bucles: for
// El bucle for permite la repetición secuencial de un conjunto de instrucciones
// en base a un contador
for(var i=0; i<10; i++){ // i++ es lo mismo que i+=1 y lo mismo que i = i + 1
  console.log("El valor de i en esta iteración del for es", i)
}
console.log("El for terminó con i igual a", i)

// Bucles: while
// El bucle while permite la repetición de un conjunto de instrucciones
// en base al cumplimiento de una condición. La condición
// es una sentencia cuyo resultado es un valor de verdad
var i=0
while(i<10){
  console.log("El valor de i en esta iteración del while es", i)
  i++ // Esto actualiza el valor de la variable i en 1
}
console.log("El while terminó con i igual a", i)

// Para más detalles de javascript como lenguaje de programación
// pueden consultar la página https://www.w3schools.com/js/
