import { NextFunction, Request, Response } from "express";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCategoryIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const category = await categoryRepository.findOneBy({ id: Number(id) });

  if (!category) throw new AppError("Category not found", 404);

  return next();
};
