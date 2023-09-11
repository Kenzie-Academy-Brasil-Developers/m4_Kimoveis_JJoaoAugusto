import { Router } from "express";
import { realEstateControllers } from "../controllers";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.verifyRealEstateAddressExists,
  realEstateControllers.create
);

realEstateRouter.get("", realEstateControllers.read);
