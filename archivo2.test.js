const{
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
} = require("./index2.js");

describe("multiplica(x, y)", function () {
    it("Deberia devolver la multiplicación de X * Y", function(){
        expect(multiplica(5, 8)).toBe(40);
        expect(multiplica(2, 3)).toBe(6);
    })
})
describe("divide(x, y)", function () {
    it("Deberia devolver la división de X / Y", function(){
        expect(divide(30, 2)).toBe(15);
        expect(divide(20, 2)).toBe(10);
    })
})
describe("sonIguales(x, y)", function () {
    it("Deberia verificar si X y Y son iguales", function(){
        expect(sonIguales(15, 30)).toBe(false);
        expect(sonIguales(20, 20)).toBe(true);
    })
})
describe("tienenMismaLongitud(str1, str2)", function () {
    it("Deberia verificar si str1 y str2 tienen la misma longitud", function(){
        expect(tienenMismaLongitud("maria", "jahaira")).toBe(false);
        expect(tienenMismaLongitud("juan","lian")).toBe(true);
    })
})
describe("menosQueNoventa(num)", function () {
    it("Deberia verificar si num es menos que 90", function(){
        expect(menosQueNoventa(60)).toBe(true);
        expect(menosQueNoventa(100)).toBe(false);
    })
})
describe("mayorQueCincuenta(num)", function () {
    it("Deberia verificar si num es mayor que 50", function(){
        expect(mayorQueCincuenta(200)).toBe(true);
        expect(mayorQueCincuenta(11)).toBe(false);
    })
})
describe("obtenerResto(x,y)", function () {
    it("Deberia verificar el resto de X % Y", function(){
        expect(obtenerResto(21, 5)).toBe(1);
        expect(obtenerResto(60, 7)).toBe(4);
    })
})
describe("esPar(num)", function () {
    it("Deberia verificar si num es par", function(){
        expect(esPar(12)).toBe(true);
        expect(esPar(7)).toBe(false);
    })
})
describe("esImpar(num)", function () {
    it("Deberia verificar si num es inpar", function(){
        expect(esImpar(12)).toBe(false);
        expect(esImpar(7)).toBe(true);
    })
})
describe("elevar(num, exponent)", function () {
    it("Deberia verificar si num es elevado al exponente dado en", function(){
        expect(elevar(2, 5)).toBe(32);
        expect(elevar(21, 5)).toBe(4084101);
    })
})
describe("redondearNumero(num)", function () {
    it("Deberia redondear el num", function(){
        expect(redondearNumero(7.4)).toBe(7);
        expect(redondearNumero(3.6)).toBe(4);
    })
})
describe("redondearHaciaArriba(num)", function () {
    it("Deberia redondear el num", function(){
        expect(redondearHaciaArriba(2.01)).toBe(3);
        expect(redondearHaciaArriba(3.99)).toBe(4);
    })
})
describe("numeroRandom()", function () {
    it("Deberia darnos un numero random entre 0 y 1", function(){
        expect(typeof numeroRandom()).toBe('number');
        //que sea mas grande mayor que 0
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        //que sea mas grande menor que 1
        expect(numeroRandom()).toBeLessThan(1);
    })
})
describe("esPositivo(numero)", function () {
    it("Deberia decirnos si el numero es positivo,negaivo o 0", function(){
        expect(esPositivo(10)).toBe(1);
        expect(esPositivo(-8)).toBe(-1);
        expect(esPositivo(0)).toBe(0);
    })
})
describe("combinarNombres(nombre,apellido)", function () {
    it("Deberia unirnos el nombre y apellido", function(){
        expect(combinarNombres("Maria","Cantalicio")).toBe("MariaCantalicio");
        expect(combinarNombres("Jose","Cantalicio")).toBe("JoseCantalicio");
    })
})
describe("obtenerSaludo(nombre)", function () {
    it("Deberia unirnos el saludo", function(){
        expect(obtenerSaludo("Maria")).toBe("HolaMaria!");
        expect(obtenerSaludo("Jose")).toBe("HolaJose!");
    })
})
describe("obtenerAreaRectangulo(alto, ancho)", function () {
    it("Deberia dar el area de rectangulo", function(){
        expect(obtenerAreaRectangulo(10,2)).toBe(20);
        expect(obtenerAreaRectangulo(20,5)).toBe(100);
    })
})
describe("retornarPerimetro(lado)", function () {
    it("Deberia retornar el perimetro", function(){
        expect(retornarPerimetro(5)).toBe(20);
        expect(retornarPerimetro(20)).toBe(80);
    })
})
describe("deEuroAdolar(euro)", function () {
    it("Deberia euros y calcule el cambio en dólares", function(){
        expect(deEuroAdolar(5)).toBe(6);
        expect(deEuroAdolar(50)).toBe(60);
    })
})