import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRep: Repository<User>,
    private jwtService: JwtService) { }
  newUser(createUserDto: CreateUserDto) {
    const hashPass = hashSync(createUserDto.password, 10);
    const newUser = this.userRep.create({ username: createUserDto.username, password: hashPass });
    this.userRep.save(newUser);
    return {
      'token': this.generateToken(newUser.uuid_id)
    }
  }
  generateToken(user_id: string) {
    return this.jwtService.sign({ user_id })
  }
}

