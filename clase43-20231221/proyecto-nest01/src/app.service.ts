import { Injectable } from '@nestjs/common';
import { Heroe, HeroeParaCargar } from './app.controller';

@Injectable()
export class AppService {
  heroes:Array<Heroe>

  constructor(){
    this.heroes=[]
  }

  getHello(): string {
    return 'Hello World!';
  }

  grabaHeroe(heroe:HeroeParaCargar):any{

    let id:number
    id=1
    if(this.heroes.length>0){
      id=this.heroes[this.heroes.length-1].id +1
    }

    let heroeNuevo:Heroe
    heroeNuevo={
      id, 
      ...heroe
    }
    this.heroes.push(heroeNuevo)
    return heroeNuevo

  }
}
