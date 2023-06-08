import { Router } from "express";
import loginController from "../../controllers/auth/loginController.js";
import registerController from "../../controllers/auth/registerController.js";
import logoutController from "../../controllers/auth/logoutController.js";
import updatePasswordController from "../../controllers/auth/updatePasswordController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";
import { tryCatch } from "../../helpers/utils/tryCatch.js";

const router = Router();

router.post("/register", tryCatch(registerController.registerUser));
router.post("/login", tryCatch(loginController.loginUser));
router.get("/logout", verifyToken, tryCatch(logoutController.logoutUser));
router.put(
  "/updatePassword/:id",
  verifyToken,
  tryCatch(updatePasswordController.updatePassword)
);

export default router;
