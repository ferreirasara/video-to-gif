import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const userWithSameUsername = await this.userRepository.findOneBy({ username: createUserDto.username })
    const userWithSameEmail = await this.userRepository.findOneBy({ email: createUserDto.email })
    if (!userWithSameUsername && !userWithSameEmail) {
      const password = await hash(createUserDto?.password, 10);
      return this.userRepository.save({ ...createUserDto, password });
    } else {
      throw new NotAcceptableException(null, { description: "There is already a user with this email or username" });
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username })
  }
}
