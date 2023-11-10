const suma = require('./suma');

describe('pruebas sobre la fn suma()', ()=>{
    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
    });
    
    test('si llega un arg no numerico, retorne null', () => {
        expect(suma(1, "2")).toBe(null);
        expect(suma(1, "2")).toBeNull();
    
    });
    
    
    test('si no llegan args, retorna 0', () => {
        expect(suma()).toBe(0);
    });
    
    test('si llegan n args, retorna suma de todos los args', () => {
        expect(suma(10,10,10,10)).toBe(40);
    });
})
