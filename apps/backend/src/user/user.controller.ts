import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import type { LoginInfo } from '@shared';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @CurrentUser() user: LoginInfo,
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.create(user.companyId, createUserDto);
  }

  @Get()
  findAll(
    @CurrentUser() user: LoginInfo
  ) {
    return this.userService.findAll(user.companyId);
  }

  @Get(':userId')
  findOne(
    @CurrentUser() user: LoginInfo,
    @Param('userId') userId: string) {
    return this.userService.findOne(user.companyId, userId);
  }

  @Patch(':userId')
  update(
    @CurrentUser() user: LoginInfo,
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(user.companyId, userId, updateUserDto);
  }

  @Delete(':userId')
  remove(
    @CurrentUser() user: LoginInfo,
    @Param('userId') userId: string) {
    return this.userService.remove(user.companyId, userId);
  }
}
