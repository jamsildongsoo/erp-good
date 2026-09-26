import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository, ILike } from 'typeorm';
import { User } from './entities/user.entity';

// Ensure the create method is marked as async to use await
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(companyId: string, createUserDto: CreateUserDto): Promise<{success: boolean}> {

    const {password, ...rest} = createUserDto;
    //password hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //hash된 비밀번호 합치기
    const user = this.userRepository.create({
      ...rest,
      companyId,
      password: hashedPassword,
    });
    await this.userRepository.save(user);

    return Promise.resolve({success: true});
  }

  findAll(companyId: string) {
    return `This action returns all user for company ${companyId}`;
  }

  findOne(companyId: string, userId: string) {
    return `This action returns a #${userId} user for company ${companyId}`;
  }

  update(companyId: string, userId: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${userId} user for company ${companyId}`;
  }

  remove(companyId: string, userId: string) {
    return `This action removes a #${userId} user for company ${companyId}`;
  }
}
