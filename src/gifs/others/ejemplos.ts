
//                 0         1        2       3       4
const frutas = ['manzana','banana','naranja','uva','mango'];

//copia desde el indice 1 hasta el 3 (sin incluir el 3)
console.log(frutas.slice(0,1));


//Slice() es un método que crea una copia superficial de una porcion (slice ) de un array
// o string sin modificar el original

//Sintaxis básica
//array.slice(inicio,fin)
//string.slice(inicio,fin)
// Parámetros
// inicio (opcional): Índice donde empieza la extracción

// Si es negativo, cuenta desde el final

// Por defecto: 0

// fin (opcional): Índice donde termina la extracción (no incluido)

// Si es negativo, cuenta desde el final

// Por defecto: hasta el final