import ContactosMemoryDAO from "../dao/contactosMemoryDAO.js"
import { ContactosPostDTO } from "../dto/contactosPostDTO.js"


class ContactosRepository{
    constructor(dao){
        this.dao=dao
    }

    async getContactos(){
        return this.dao.get()
    }

    async create(contacto){
        return this.dao.create(new ContactosPostDTO(contacto))
    }
}

export const contactosRepository=new ContactosRepository(new ContactosMemoryDAO())