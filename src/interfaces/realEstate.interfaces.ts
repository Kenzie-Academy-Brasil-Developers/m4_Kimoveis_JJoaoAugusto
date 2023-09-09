import { z } from "zod";
import { realEstateReadSchema } from "../schemas";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

export type RealEstateRead = z.infer<typeof realEstateReadSchema>;
export type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
