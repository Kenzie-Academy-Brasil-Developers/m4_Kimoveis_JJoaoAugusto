import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";

export const verifyUserEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  const user: User | null = await userRepository.findOneBy({ email });
  if (user) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
