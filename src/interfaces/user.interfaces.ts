import { z } from "zod";
import { User } from "../entities";
import { userCreateSchema, userReturnSchema } from "../schemas";
import { DeepPartial } from "typeorm";

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserUpdate = DeepPartial<User>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserRead = Array<UserReturn>;
