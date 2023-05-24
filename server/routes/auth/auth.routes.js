import { Router } from "express";
import loginController from "../../controllers/auth/loginController.js";
import registerController from "../../controllers/auth/registerController.js";
import logoutController from "../../controllers/auth/logoutController.js";
import updatePasswordController from "../../controllers/auth/updatePasswordController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";

const router = Router();

router.post("/register", registerController.registerUser);
router.post("/login", loginController.loginUser);
router.get("/logout", verifyToken, logoutController.logoutUser);
router.put(
  "/updatePassword/:id",
  verifyToken,
  updatePasswordController.updatePassword
);

export default router;
