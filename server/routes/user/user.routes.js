import { Router } from "express";
import userController from "../../controllers/user/userController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";

const router = Router();

router.get("/getUser", verifyToken, userController.getUser);

export default router;
