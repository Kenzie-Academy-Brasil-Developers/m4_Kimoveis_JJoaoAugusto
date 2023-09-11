import { NextFunction, Request, Response } from "express";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCategoryNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;
  const category = await categoryRepository.findOneBy({ name });

  if (category) throw new AppError("Category already exists", 409);

  return next();
};
