import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate } from "../interfaces";
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
    user: user!,
    ...scheduleBody,
  });
  await scheduleRepository.save(schedule);
  return { message: "Schedule created" };
};

const retrieve = async (id: number) => {
  const realEstate = await realEstateRepository.findOne({
    where: { id: id },
    relations: { schedules: { user: true }, address: true, category: true },
  });

  return realEstate;
};
export default { create, retrieve };
