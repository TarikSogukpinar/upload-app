import {Router} from 'express';
import loginController from "../../controllers/auth/loginController.js";
import registerController from "../../controllers/auth/registerController.js";

const router = Router();

router.post("/register", registerController.registerUser);
router.post("/login", loginController.loginUser);

export default router;