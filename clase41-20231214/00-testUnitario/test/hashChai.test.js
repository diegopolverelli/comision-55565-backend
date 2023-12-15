
// import mongoose from "mongoose";
// import Assert from 'assert'
import chai from 'chai'
import {describe, it} from 'mocha'
import { createHash, passwordValidation } from '../src/utils/index.js'

const expect=chai.expect

describe("Pruebas funciones hash", async ()=>{

    // analizar si va algun after, before, etc.

    it("Si ejecuto createHash enviando un password como argumento, genera su hash con algoritmo bcrypt", async ()=>{
        let password="codercoder"
        let resultado=await createHash(password)

        expect(resultado).not.to.be.equal(password)
        expect(resultado.length).to.be.greaterThan(10)
        expect(resultado.substring(0,4)).to.be.equal("$2b$")

    })

    it("La funcion passwordValidation recibiendo usuario y password, verifica coincidencia", async ()=>{
        let password="123"
        let usuario={
            password:await createHash(password)
        }

        let resultado=await passwordValidation(usuario, password)
        
        expect(resultado).is.true
        expect(resultado).to.be.eq(true)

        resultado=await passwordValidation(usuario, "456")
        
        expect(resultado).is.false
        expect(resultado).to.be.eq(false)

    })

})