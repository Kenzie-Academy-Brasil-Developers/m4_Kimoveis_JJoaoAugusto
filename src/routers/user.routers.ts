import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  userControllers.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  userControllers.read
);
userRouter.patch(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.validateBody(userUpdateSchema),
  middlewares.userVerifyIdExists,
  userControllers.update
);
userRouter.delete(
  "/:id",
  middlewares.userVerifyIdExists,
  userControllers.destroy
);
