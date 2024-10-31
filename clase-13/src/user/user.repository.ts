import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './model/user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/user-create.dto';
import { UpdateUserDto } from './dtos/user-update.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(data:  CreateUserDto) {
    return await this.userModel.create(data);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findById(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return 'User delete';
  }
}
