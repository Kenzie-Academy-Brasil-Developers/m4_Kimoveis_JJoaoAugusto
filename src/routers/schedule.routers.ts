import { Router } from "express";
import { scheduleControllers } from "../controllers";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.verifyScheduleExists,
  scheduleControllers.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.verifyRealEstatesIdExists,
  scheduleControllers.retrieve
);
