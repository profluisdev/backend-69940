import { Model } from "mongoose";
import { TaskEntity } from "../entities/task.entity";
import { taskModel } from "../models/task.model";

const getAll = async (): Promise<TaskEntity[] | null> => {
  return await taskModel.find();
};

const getById = async (id: string): Promise<TaskEntity | null> => {
  return await taskModel.findById(id);
};

const create = async (data: TaskEntity): Promise<TaskEntity | null> => {
  return await taskModel.create(data);
};

const update = async (id: string, data: TaskEntity): Promise<TaskEntity | null> => {
  return await taskModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string): Promise<TaskEntity | null> => {
  return await taskModel.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
