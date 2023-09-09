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
): Promise<Schedule> => {
  const { realEstateId, ...scheduleBody } = payload;

  const user: User | null = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  if (!realEstate) throw new AppError("RealEstate not found", 404);

  const schedule: Schedule = scheduleRepository.create({
    realEstate: realEstate,
    user: user,
    ...scheduleBody,
  });
  await scheduleRepository.save(schedule);
  return schedule;
};

const retrieve = async (id: number): Promise<Schedule[]> => {
  const schedules = await scheduleRepository.findBy({
    realEstate: { id },
  });
  if (!schedules) throw new AppError("Real Estate not found", 404);

  return schedules;
};

export default { create, retrieve };
