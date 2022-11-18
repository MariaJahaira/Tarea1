const{
    nombre,
    edad,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
} = require("./index.js");

describe("nombre", function () {
    it("Deberia devolver un dato de tipo string", function(){
        expect(typeof nombre).toBe('string');
    })
})
describe("edad", function () {
    it("Deberia devolver un dato de tipo number", function(){
        expect(typeof edad).toBe('number');
    })
})
describe("nuevoBool", function () {
    it("Deberia devolver un dato de tipo booleano", function(){
        expect(typeof nuevoBool).toBe('boolean');
    })
})
describe("nuevaResta", function () {
    it("Deberia devolver un dato de tipo booleano", function(){
        expect(typeof nuevaResta).toBe('boolean');
    })
})
describe("nuevaMultiplicacion", function () {
    it("Debe ser una multiplicacion", function(){
        expect(typeof nuevaMultiplicacion).toBe('boolean');
    })
})
describe("nuevoModulo", function () {
    it("El resultado debe ser 1", function(){
        expect(typeof nuevoModulo).toBe('boolean');
    })
})