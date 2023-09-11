import { NextFunction, Request, Response } from "express";
import { realEstateRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstatesIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const foundRealEstates = await realEstateRepository.findOneBy({
    id: Number(id),
  });

  if (!foundRealEstates) {
    throw new AppError("RealEstate not found", 404);
  }

  res.locals = { ...res.locals, foundRealEstates };
  return next();
};
