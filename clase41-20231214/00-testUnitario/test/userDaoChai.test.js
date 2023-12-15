import Users from "../src/dao/Users.dao.js";
import mongoose from "mongoose";
// import Assert from 'assert'
import chai from 'chai'
import {describe, it} from 'mocha'

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

// const assert=Assert.strict
const expect=chai.expect


describe("Prueba al DAO de usuarios del proyecto AdoptMe (utilizando Chai...)", function(){

    this.timeout(5000)

    before(async function(){
        this.usersDao=new Users()
    })

    beforeEach(async function(){
        await mongoose.connection.collection('users').deleteMany({email:'mjuarez2023@test.com'})
    })

    after(async function(){
        await mongoose.connection.collection('users').deleteMany({email:'mjuarez2023@test.com'})
    })

    it("El dao debe devolver un array al ejecutar el método get", async function(){

        let resultado=await this.usersDao.get()

        // assert.strictEqual(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.equal(true)
        expect(Array.isArray(resultado)).to.be.true


    })

    it("El dao graba un usuario con su método save", async function(){

        // first_name, last_name, email, password
        let usuarioPrueba={
            first_name:"Miguel", last_name:"Juarez", email:"mjuarez2023@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(usuarioPrueba)

        // assert.ok(resultado._id)
        expect(resultado).to.have.property("_id")
        expect(resultado._id).to.be.ok
        expect(resultado._id).to.exist
        // assert.ok(resultado.first_name)
        // assert.equal(resultado.first_name, "Miguel")
        expect(resultado).to.have.property("first_name").and.is.equal("Miguel")

        // assert.equal(resultado.last_name, "Juarez")
        expect(resultado).to.have.property("last_name").and.is.equal("Juarez")

    })

    it("El dao al grabar usuarios con el metodo save, genera una propiedad pets de tipo array", async function(){

        // first_name, last_name, email, password
        let usuarioPrueba={
            first_name:"Miguel", last_name:"Juarez", email:"mjuarez2023@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(usuarioPrueba)

        // assert.strictEqual(Array.isArray(resultado.pets), true)
        expect(Array.isArray(resultado.pets)).to.be.equal(true)
        expect(Array.isArray(resultado.pets)).to.be.true
        expect(resultado.pets).is.instanceOf(Array)


    })

})