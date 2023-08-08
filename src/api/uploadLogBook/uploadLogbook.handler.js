import { validationResult } from "express-validator";
import { readFile } from "../../helper/fileReader.js";
import { vehicleInformationSummary } from "./uploadLogbook.js";

export const uploadLogBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const logbookFile = req.file;
  if (!logbookFile) {
    return res.status(400).json({
      success: false,
      errorMessage: "Please upload a logbook file.",
    });
  }

  const formDataResponseList = req.body;
  const vehicleDetails = vehicleInformationSummary(formDataResponseList);

  let logbookTextContent;
  try {
    logbookTextContent = readFile(logbookFile.path);
  } catch (err) {
    console.log("here is am", err);
    return res.status(400).send({
      success: false,
      errorMessage: err.message,
    });
  }

  const response = `
  ${vehicleDetails}

  <pre>Logbook:</pre>

  <pre>${logbookTextContent}</pre>
  `;

  res.send(response);
};
