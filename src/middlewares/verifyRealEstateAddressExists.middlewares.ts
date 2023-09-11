import { NextFunction, Request, Response } from "express";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstateAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address = req.body.address;
  const foundAddress = await addressRepository.findOneBy({ ...address });

  if (foundAddress) throw new AppError("Address already exists", 409);

  return next();
};
