import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { sessionSchema } from "../schemas";
import { sessionControllers } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(sessionSchema), sessionControllers.create);
