import { Router } from "express";
import fileController from "../../controllers/file/fileController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";

const router = Router();

router.post(
  "/uploadFile",
  verifyToken,
  fileController.upload.single("file"),
  fileController.uplodFile
);

export default router;
