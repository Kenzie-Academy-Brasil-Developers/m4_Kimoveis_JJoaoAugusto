import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive(),
  user: z.number().positive(),
});

export const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  user: true,
});

export const scheduleReadSchema = scheduleSchema.array();
