import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository, ILike } from 'typeorm';
import { User } from './entities/user.entity.js';

// Ensure the create method is marked as async to use await
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{success: boolean}> {

    const {password, ...rest} = createUserDto;
    //password hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //hash된 비밀번호 합치기
    const user = this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });
    await this.userRepository.save(user);

    return Promise.resolve({success: true});
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
