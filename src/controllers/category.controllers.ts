import { Request, Response } from "express";
import categoryServices from "../services/category.services";
import { Category } from "../entities";
import { CategoryRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryRead = await categoryServices.read();
  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const category: Category = await categoryServices.retrieve(Number(id));
  return res.status(200).json(category);
};

export default { create, read, retrieve };
