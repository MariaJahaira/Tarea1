//MODULO 2
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO funcionará.
// No cambies los nombres de las funciones.
function multiplica(x, y) {
// Multiplica "x" por "y" y devuelve el valor
// Tu código:
const resultadoMultiplica = x * y ;
return resultadoMultiplica;
}

function divide(x, y) {
// Divide "x" entre "y" y devuelve el valor
// Tu código:
const resultadoDivide = x / y ;
return resultadoDivide;
}
function sonIguales(x, y) {
// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
//return x*y;
const resultadoIgual = x === y ;
return resultadoIgual;
}
function tienenMismaLongitud(str1, str2) {
// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
const resultadoLongitud = str1.length == str2.length;
return resultadoLongitud;
}
function menosQueNoventa(num) {
// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
const resultadomenosNoventa = num<90;
return resultadomenosNoventa;
}
function mayorQueCincuenta(num) {
// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
const resultadomayorcincuenta = num>50;
return resultadomayorcincuenta;
}
function obtenerResto(x, y) {
// Obten el resto de la división de "x" entre "y"
// Tu código:
const resultadoResto = x % y;
return resultadoResto;
}
function esPar(num) {
// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
const resultadoPar = num % 2 == 0;
return resultadoPar;
}
function esImpar(num) {
// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
const resultadoinPar = num % 2 == 1;
return resultadoinPar;
}
function elevar(num, exponent) {
// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
const resultadoelevar = Math.pow(num,exponent);
return resultadoelevar;
}
function redondearNumero(num) {
// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
const resultadoredondear = Math.round(num);
return resultadoredondear;
}
function redondearHaciaArriba(num) {
// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
const resultadoredondeararriba = Math.ceil(num);
return resultadoredondeararriba;
}
function numeroRandom() {
//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
// Tu código:
const numeroRandom = Math.random();
return numeroRandom;
}
function esPositivo(numero) {
//La función va a recibir un entero. Devuelve como resultado una
//cadena de texto que indica si el número es positivo o negativo.
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
// Tu código:
const esPositivo = Math.sign(numero);
return esPositivo;
}
function combinarNombres(nombre, apellido) {
// Devuelve "nombre" y "apellido" combinados en una string y
//separados por un espacio.
// Ejemplo: "Soy", "Monfortiano" -> "Soy Monfortiano"
// Tu código:
//const conbinarnombre = split(nombre,apellido);
const conbinarnombre = (nombre+''+apellido);
return conbinarnombre;
}
function obtenerSaludo(nombre) {
// Toma la string "nombre" y concatena otras string en la cadena para
//que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
const obtenerSaludo = 'Hola'+''+ nombre +'!';
return obtenerSaludo;
}
function obtenerAreaRectangulo(alto, ancho) {
// Retornar el area de un rectángulo teniendo su altura y ancho
// Tu código:
const AreaRectangulo = (alto*ancho);
return AreaRectangulo;
}
function retornarPerimetro(lado) {
//Escibe una función a la cual reciba el valor del lado de un
//cuadrado y retorne su perímetro.
//Escribe tu código aquí
const Perimetro = (lado*4);
return Perimetro;
}
function deEuroAdolar(euro) {
//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//como parámetro un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
const deEuroAdolar = euro * 1.2;
return deEuroAdolar;
}
// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
};