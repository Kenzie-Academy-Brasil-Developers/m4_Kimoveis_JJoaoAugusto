import { Router } from "express";
import { categoryControllers } from "../controllers";
import middlewares from "../middlewares";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  categoryControllers.create
);
categoryRouter.get("", categoryControllers.read);
categoryRouter.get("/:id/realEstate");
