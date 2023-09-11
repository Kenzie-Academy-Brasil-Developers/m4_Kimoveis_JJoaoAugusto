import { User } from "../entities";
import { AppError } from "../errors";
import { UserCreate } from "../interfaces";
import {
  UserRead,
  UserReturn,
  UserUpdate,
} from "../interfaces/user.interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  const users = await userRepository.find();
  return userReadSchema.parse(users);
};

const update = async (
  payload: UserUpdate,
  foundUser: User
): Promise<UserReturn> => {
  if (payload.admin && foundUser.admin !== payload.admin) {
    return userReturnSchema.parse(foundUser);
  }
  const updatedUser = await userRepository.save({ ...foundUser, ...payload });
  return userReturnSchema.parse(updatedUser);
};

const destroy = async (foundUser: User) => {
  await userRepository.softRemove(foundUser);
};

export default { create, read, update, destroy };
