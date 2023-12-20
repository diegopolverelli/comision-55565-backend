import supertest from 'supertest'
import chai from 'chai'
import mongoose from 'mongoose'
import {describe, it} from 'mocha'

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

const expect=chai.expect
const requester=supertest("http://localhost:8080")

describe("Pruebas al proceso de autenticacion", function(){
    this.timeout(6000)
    let cookie
    
    after(async function(){
        await mongoose.connection.collection("users").deleteMany({email:"juan@test.com"})
    })

    it("Debe poder agregarse un usuario con la ruta /api/sessions/register, metodo post", async ()=>{
        const usuarioPrueba={
            first_name:"Juan", last_name:"Perez", email:"juan@test.com", password:"123"
        }

        let {body} = await requester.post("/api/sessions/register").send(usuarioPrueba)

        expect(body).to.have.property("payload")
        expect(body).to.have.property("status").and.is.eq("success")

    })


    it("La ruta /api/sessions/login permite logearse usando el metodo post, y genera una cookie", async ()=>{
        const usuarioPrueba={
            email:"juan@test.com", password:"123"
        }

        let {body, headers} = await requester.post("/api/sessions/login").send(usuarioPrueba)
        console.log(headers)

        cookie=headers['set-cookie'][0]

        expect(body).to.have.property("message").and.is.eq("Logged in")
        expect(cookie.split("=")[0]).is.eq("coderCookie")
        expect(cookie.split("=")[1]).is.not.empty

    })

    it("El endepoint /api/sessions/current recibe la cookie generada, e interpreta el nombre guardado en el jwt", async ()=>{
        let {body}=await requester.get("/api/sessions/current").set("Cookie",cookie)

        console.log(body)

        expect(body.payload.email).to.be.equal("juan@test.com")

    })


}) // describe gral.