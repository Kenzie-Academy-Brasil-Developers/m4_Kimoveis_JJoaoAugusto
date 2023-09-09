import { handleErrors } from "./handleErrors.middlewares";
import { userVerifyIdExists } from "./verifyUserId.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { verifyAdmin } from "./verifyAdmin.middlewares";

export default {
  handleErrors,
  userVerifyIdExists,
  validateBody,
  verifyToken,
  verifyAdmin,
};
