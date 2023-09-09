import { Request, Response } from "express";
import { realEstateServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.create(req.body);
  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstates = await realEstateServices.read();
  return res.status(200).json(realEstates);
};

export default { create, read };
