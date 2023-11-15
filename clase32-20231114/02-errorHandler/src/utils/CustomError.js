export class CustomError{
    static CustomError(nombre, mensaje, codigo, descripcion){
        let error=new Error(mensaje)
        error.name=nombre
        error.descripcion=descripcion
        error.codigo=codigo

        return error
    }
}