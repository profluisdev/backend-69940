import { Handler } from "express";
import taskServices from "../services/task.services";
import { TaskEntity } from "../entities/task.entity";

const getAll: Handler = async (_req, res, next) => {
  try {
    const tasks = await taskServices.getAll();

    res.status(200).json({ status: "ok", payload: tasks });
  } catch (error) {
    next(error);
  }
};
const getById: Handler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskServices.getById(id);

    res.status(200).json({ status: "ok", payload: task });
  } catch (error) {
    next(error);
  }
};

const create: Handler = async (req, res, next) => {
  try {
    const { description } = req.body as TaskEntity;
    const task = await taskServices.create({ description });

    res.status(201).json({ status: "ok", payload: task });
  } catch (error) {
    next(error);
  }
};

const update: Handler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body as TaskEntity;
    const task = await taskServices.update(id, { description });

    res.status(200).json({ status: "ok", payload: task });
  } catch (error) {
    next(error);
  }
};

const remove: Handler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await taskServices.remove(id);
    res.status(200).json({ status: "ok", payload: response });
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
