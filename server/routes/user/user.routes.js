import { Router } from "express";
import userController from "../../controllers/user/userController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";
import { tryCatch } from "../../helpers/utils/tryCatch.js";

const router = Router();

router.get("/getUser", verifyToken, tryCatch(userController.getUser));

router.get(
  "/getUserById/:id",
  verifyToken,
  tryCatch(userController.getUserById)
);

router.get(
  "/getUserLocationInformation",
  verifyToken,
  tryCatch(userController.getUserLocationInformation)
);

router.get(
  "/getUserOperatingSystemType",
  verifyToken,
  tryCatch(userController.getUserOperatingSystemType)
);

router.delete(
  "/userAccountDeleted/:id",
  verifyToken,
  tryCatch(userController.userAccountDeleted)
);

export default router;
