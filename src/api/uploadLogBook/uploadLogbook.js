import { changeWordToTitleCase } from "../../helper/stringCasing.js";

export const vehicleInformationSummary = (vehicleDetailList) => {
  let vehicleDetailsContent = "<pre>";

  for (let [key, value] of Object.entries(vehicleDetailList)) {
    vehicleDetailsContent =
      vehicleDetailsContent + `${changeWordToTitleCase(key)}: ${value}\n`;
  }

  return vehicleDetailsContent + "</pre>";
};
