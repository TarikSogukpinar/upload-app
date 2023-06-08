import { Router } from "express";
import fileController from "../../controllers/file/fileController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyToken.js";
import { tryCatch } from "../../helpers/utils/tryCatch.js";

const router = Router();

router.post(
  "/uploadFile",
  fileController.upload.single("file"),
  tryCatch(fileController.uploadFile),
  verifyToken
);

export default router;
