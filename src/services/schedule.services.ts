import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate, ScheduleRead } from "../interfaces";
import {
  realEstateRepository,
  scheduleRepository,
  userRepository,
} from "../repositories";

const create = async (
  payload: ScheduleCreate,
  userId: number
): Promise<Object> => {
  const { realEstateId, ...scheduleBody } = payload;

  const user: User | null = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  if (!realEstate) throw new AppError("RealEstate not found", 404);

  const date = new Date(payload.date + " " + payload.hour);

  const hour = date.getHours();
  if (hour < 8 || hour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  const day = date.getDay();
  if (day < 1 || day > 5) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  const schedule: Schedule = scheduleRepository.create({
    realEstate: realEstate,
    user: user,
    ...scheduleBody,
  });
  await scheduleRepository.save(schedule);
  return { message: "Schedule created" };
};

const retrieve = async (id: number) => {
  const schedules = await scheduleRepository.findBy({
    realEstate: { id },
  });
  if (schedules.length <= 0) throw new AppError("RealEstate not found", 404);

  const realEstates = [];

  for await (const schedule of schedules) {
    const foundRealEstate = await realEstateRepository.findOneBy(schedule);
    realEstates.push(foundRealEstate);
  }

  return realEstates;
};

export default { create, retrieve };
