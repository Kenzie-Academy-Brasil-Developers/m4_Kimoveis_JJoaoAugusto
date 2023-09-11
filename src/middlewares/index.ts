import { handleErrors } from "./handleErrors.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { verifyAdmin } from "./verifyAdmin.middlewares";
import { verifyUserIdExists } from "./verifyUserIdExists.middlewares";
import { verifyUserPermission } from "./verifyUserPermission.middlewares";
import { verifyCategoryNameExists } from "./verifyCategoryNameExists.middlewares";
import { verifyCategoryIdExists } from "./verifyCategoryIdExists.middlewares";
import { verifyRealEstateAddressExists } from "./verifyRealEstateAddressExists.middlewares";
import { verifyScheduleExists } from "./verifyScheduleExists.middlewares";
import { verifyUserEmailExists } from "./verifyUserEmailExists";
import { verifyRealEstatesIdExists } from "./verifyRealEstateIdExists.middlewares";

export default {
  handleErrors,
  validateBody,
  verifyToken,
  verifyAdmin,
  verifyUserIdExists,
  verifyUserPermission,
  verifyCategoryNameExists,
  verifyCategoryIdExists,
  verifyRealEstateAddressExists,
  verifyScheduleExists,
  verifyUserEmailExists,
  verifyRealEstatesIdExists,
};
