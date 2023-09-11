import { NextFunction, Request, Response } from "express";
import {
  realEstateRepository,
  scheduleRepository,
  userRepository,
} from "../repositories";
import { AppError } from "../errors";
import { RealEstate } from "../entities";

export const verifyScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const schedule = req.body;

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: schedule.realEstateId,
  });
  res.locals = { ...res.locals, realEstate };

  const foundRealEstateSchedule = await scheduleRepository.findOneBy({
    date: schedule.date,
    hour: schedule.hour,
    realEstate: res.locals.realEstate,
  });

  if (foundRealEstateSchedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  const user = await userRepository.findOneBy({
    id: schedule.userId,
  });
  res.locals = { ...res.locals, user };

  const foundUserSchedule = await scheduleRepository.findOneBy({
    date: schedule.date,
    hour: schedule.hour,
    user: res.locals.user,
  });

  if (foundUserSchedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
