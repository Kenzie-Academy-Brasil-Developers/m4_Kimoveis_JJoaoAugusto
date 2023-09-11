import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyUserIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const foundUser = await userRepository.findOneBy({ id: Number(id) });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, foundUser };
  return next();
};
