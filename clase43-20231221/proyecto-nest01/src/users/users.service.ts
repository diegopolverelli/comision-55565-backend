import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  users:Array<User>
  constructor(){
    this.users=[]
  }

  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    let id=1
    if(this.users.length>0){
      id=this.users[this.users.length-1].id +1
    }
    let nuevoUsuario:User
    nuevoUsuario={
      id, ...createUserDto
    }
    this.users.push(nuevoUsuario)
    return nuevoUsuario
  }

  findAll() {
    // return `This action returns all users`;
    return this.users
  }

  findOne(id: number) {
    // return `This action returns a #${id} user`;
    return this.users.find(u=>u.id===id)
  }

  findOneByEmail(email: string) {
    // return `This action returns a #${id} user`;
    return this.users.find(u=>u.email===email)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
