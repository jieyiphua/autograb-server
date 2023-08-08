import fs from "fs";

export const readFile = (filePath) =>
  fs.readFileSync(filePath, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return new Error(`File cannot be read: ${error}`);
    } else {
      return data;
    }
  });
