import chai, { expect } from 'chai'

const should=chai.should();

describe('Ejemplo prueba should',()=>{
    it('verificar que un valor sea igual a 5',()=>{
        const numero=5;
        numero.should.equal(5)
    })

    it('verificar que el numero 2 exista en un array determinado',()=>{
        const arreglo=[1,2,3,4,5]

        arreglo.should.include(2)
        // expect(arreglo).include(5)
    })

})