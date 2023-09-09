import { Request, Response } from "express";
import { UserReturn } from "../interfaces/user.interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = await userServices.read();
  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;
  const user = await userServices.update(req.body, foundUser);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;
  await userServices.destroy(foundUser);
  return res.status(204).json();
};

export default { create, read, update, destroy };
