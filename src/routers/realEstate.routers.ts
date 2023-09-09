import { Router } from "express";
import { realEstateControllers } from "../controllers";
import middlewares from "../middlewares";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
