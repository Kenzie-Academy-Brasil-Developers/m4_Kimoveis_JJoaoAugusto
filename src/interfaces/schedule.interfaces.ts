import { z } from "zod";
import {
  scheduleCreateSchema,
  scheduleReadSchema,
} from "../schemas/schedule.schemas";

export type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
export type ScheduleRead = z.infer<typeof scheduleReadSchema>;
