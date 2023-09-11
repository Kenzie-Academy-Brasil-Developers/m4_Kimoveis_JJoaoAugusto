import { z } from "zod";
import { addressCreateSchema } from "./address.schemas";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
  address: addressCreateSchema,
  categoryId: z.number().positive(),
});

export const realEstateReadSchema = realEstateSchema.array();

export const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({ address: addressCreateSchema });
