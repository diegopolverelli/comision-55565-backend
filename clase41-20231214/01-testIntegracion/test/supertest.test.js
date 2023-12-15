import supertest from 'supertest'
import chai from 'chai'
import mongoose from 'mongoose'
import {describe, it} from 'mocha'
import fs from 'fs'

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

const expect=chai.expect
const requester=supertest("http://localhost:8080")

describe("Pruebas al proyeto AdoptMe", function(){
    this.timeout(6000)


    describe("Pruebas al módulo pets",function(){

        after(async function(){
            await mongoose.connection.collection("pets").deleteMany({specie:"testing"})
        })

        it("El endpoint /api/pets, con metodo POST, permite generar una mascota nueva en BD", async function(){
            let mascota={name:"Pulgoso1", specie:"testing", birthDate: new Date().toUTCString()}

            // let resultado=await requester.post("/api/pets").send(mascota)
            // console.log(resultado.body)

            let {body, ok, statusCode}=await requester.post("/api/pets").send(mascota)
            // console.log({body, ok, statusCode})

            expect(body.status).is.eq("success")
            expect(statusCode).to.be.equal(200)
            expect(ok).to.be.true
            expect(body.payload).to.has.property("_id")

            // let id=body.payload._id

        })

        it("El endpoint /api/pets, con metodo POST, enviando informacion incompleta, devuelve error status 400", async function(){
            let mascota={specie:"testing", birthDate: new Date().toUTCString()}

            // let resultado=await requester.post("/api/pets").send(mascota)
            // console.log(resultado.body)

            let {statusCode}=await requester.post("/api/pets").send(mascota)
            // console.log({body, ok, statusCode})

            expect(statusCode).to.be.equal(400)
            // let id=body.payload._id

        })

    }) // 1er describe

    describe("Prueba subida archivos", async function(){

        it("El endpoint /api/pets/withimage, metodo post, permite subir una imagen", async function(){
            let mascota={name:"Pulgoso", specie:"testing", birthDate: new Date().toUTCString()}

            let {statusCode, body}=await requester.post("/api/pets/withimage")
                                                .field("name", mascota.name)
                                                .field("specie", mascota.specie)
                                                .field("birthDate", mascota.birthDate)
                                                .attach("image", './test/huesos.jpeg')

            expect(statusCode).is.eq(200)
            expect(body.payload).to.have.property("image")
            expect(body.payload.image).to.exist
            expect(fs.existsSync(body.payload.image)).to.be.true

        })

    })

}) // describe gral.