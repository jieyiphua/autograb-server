import { Router } from "express";
import multer from "multer";
import * as uploadLogbookHandler from "./uploadLogbook.handler.js";
import { validateLogbookRequestBodyData } from "./uploadLogbook.validation.js";

const uploadLogbookRoutes = Router();
const upload = multer({ dest: "uploads" });

uploadLogbookRoutes.post(
  "/upload",
  upload.single("logbookUpload"),
  validateLogbookRequestBodyData,
  uploadLogbookHandler.uploadLogBook
);

export default uploadLogbookRoutes;
