import { body } from "express-validator";

export const validateLogbookRequestBodyData = [
  body("make").exists().withMessage("Vehicle make is required."),
  body("model").exists().withMessage("Vehicle model is required."),
  body("badge").exists().withMessage("Vehicle badge is required."),
];
