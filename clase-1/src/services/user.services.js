import Users from "../dao/Users.dao.js";
import { generateUsersMock } from "../mocks/user.mock.js";

export class UserServices {
  constructor() {
    // this.userRepository = new UserRepository(new Users());
    this.userDao = new Users();
  }
  async getAll() {
    const users = await this.userDao.get();
    return users;
  }
  async getById(id) {
    const user = await this.userDao.getBy(id);
    return user;
  }
  async create(data) {
    const user = await this.userDao.save(data);
    return user;
  }
  async update(id, data) {
    const user = await this.userDao.update(id, data);
    return user;
  }
  async remove(id) {
    await this.userDao.delete(id);
    return "ok";
  }
  async createMocks() {
    const users = generateUsersMock(10);
    const usersDb = await this.userDao.saveMany(users);
    return usersDb;
  }
}