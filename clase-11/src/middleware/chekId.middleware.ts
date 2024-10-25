import { Handler } from "express";
import { isValidObjectId } from "mongoose";
import { BadRequestError } from "../errors/custom.error";

export const checkId: Handler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw new BadRequestError("Id is not ObjectId");

    next();
  } catch (error) {
    next(error);
  }
};
