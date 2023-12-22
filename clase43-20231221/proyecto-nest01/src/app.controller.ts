import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/prueba")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("prueba")
  @Header("Content-Type", "application/json")
  @HttpCode(HttpStatus.OK)
  prueba( @Query("nombre") nombre:string, @Query() queryParams:object){

    return {mensaje:"Endpoint prueba...!!!", nombre, queryParams}
  }

  @Get("prueba/:id")
  prueba2( @Param("id") id:string):object{

    return {id}
  }

  @Post('heroes')
  heroes(@Body() body:any):object{

    console.log("hola", body)

    let nuevoHeroe={
      nombre:body.nombre, 
      publica:body.publica
    }

    nuevoHeroe=this.appService.grabaHeroe(nuevoHeroe)
    return {nuevoHeroe}
  }

  saludar():void{
    console.log('Hola...!!!'  );
  }
}

export class Heroe{
  nombre:string
  id:number
  publica:string
}

export class HeroeParaCargar{
  nombre:string
  publica:string
}

