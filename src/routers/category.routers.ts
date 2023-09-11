import { Router } from "express";
import { categoryControllers } from "../controllers";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.verifyCategoryNameExists,
  categoryControllers.create
);

categoryRouter.get("", categoryControllers.read);

categoryRouter.get(
  "/:id/realEstate",
  middlewares.verifyCategoryIdExists,
  categoryControllers.retrieve
);
