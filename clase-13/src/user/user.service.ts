import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/user-create.dto';
import { UpdateUserDto } from './dtos/user-update.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDto) {
    const user = await this.userRepository.create(data);
    if (!user) throw new BadRequestException('User not create');

    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.update(id, data);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async remove(id: string) {
    const user = await this.userRepository.remove(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
