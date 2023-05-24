import { Router } from "express";
import userController from "../../controllers/user/userController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";

const router = Router();

router.get("/getUser", verifyToken, userController.getUser);

router.get(
  "/getUserLocationInformation",
  verifyToken,
  userController.getUserLocationInformation
);

router.get("/healthCheck", userController.healthCheck);

router.get(
  "/getUserOperatingSystemType",
  verifyToken,
  userController.getUserOperatingSystemType
);

export default router;
