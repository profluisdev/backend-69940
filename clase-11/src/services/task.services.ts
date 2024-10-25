import { TaskEntity } from "../entities/task.entity";
import taskRepository from "../repository/task.repository";

const getAll = async (): Promise<TaskEntity[]> => {
  const tasks = await taskRepository.getAll();
  if (!tasks) throw new Error("Tasks not found");
  return tasks;
};

const getById = async (id: string): Promise<TaskEntity> => {
  const task = await taskRepository.getById(id);
  if (!task) throw new Error("Task not found");

  return task;
};

const create = async (data: TaskEntity): Promise<TaskEntity> => {
  const task = await taskRepository.create(data);
  if (!task) throw new Error("Task not found");

  return task;
};

const update = async (id: string, data: TaskEntity): Promise<TaskEntity> => {
  const task = await getById(id);
  if (!task) throw new Error("Task not found");

  const taskUpdate = await taskRepository.update(id, data);
  if (!taskUpdate) throw new Error("Task not update");
  return taskUpdate;
};

const remove = async (id: string): Promise<string> => {
  const task = await getById(id);
  if (!task) throw new Error("Task not found");
  const taskDelete = await taskRepository.remove(id);
  if (!taskDelete) throw new Error("Task not update");
  return "Task deleted";
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
