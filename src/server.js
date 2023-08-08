import express, { json } from "express";
import routes from "./routes.js";

const app = express();
const PORT = 4000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

/** Run the app */
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
