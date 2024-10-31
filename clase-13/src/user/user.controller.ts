import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user-create.dto';
import { UpdateUserDto } from './dtos/user-update.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User Module')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: CreateUserDto) {
    const user = await this.userService.create(data);
    return { status: 'ok', payload: user };
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return { status: 'ok', payload: users };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    return { status: 'ok', payload: user };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    const user = await this.userService.update(id, data);
    return { status: 'ok', payload: user };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.remove(id);
    return { status: 'ok', payload: user };
  }
}
