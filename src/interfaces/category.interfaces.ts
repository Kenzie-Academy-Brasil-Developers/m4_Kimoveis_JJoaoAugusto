import { z } from "zod";
import { categoryCreateSchema, categoryReadSchema } from "../schemas";

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;
export type CategoryRead = z.infer<typeof categoryReadSchema>;
