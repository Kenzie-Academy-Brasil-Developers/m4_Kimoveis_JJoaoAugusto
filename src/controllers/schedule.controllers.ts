import { Request, Response } from "express";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { decoded } = res.locals;
  const userId: number = decoded.sub;
  const schedule: Object = await scheduleServices.create(req.body, userId);
  return res.status(201).json(schedule);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const schedules = await scheduleServices.retrieve(Number(id));
  return res.status(200).json(schedules);
};

export default { create, retrieve };
