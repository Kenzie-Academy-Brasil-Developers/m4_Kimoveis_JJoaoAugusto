import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyUserEmailExists,
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
  middlewares.verifyUserIdExists,
  middlewares.verifyUserPermission,
  middlewares.validateBody(userUpdateSchema),
  userControllers.update
);

userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyUserIdExists,
  middlewares.verifyAdmin,
  userControllers.destroy
);
