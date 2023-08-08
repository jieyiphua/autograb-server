import { Router } from "express";
import uploadLogbookRoutes from "./api/uploadLogBook/uploadLogbook.routes.js";

const routes = Router();

routes.use(uploadLogbookRoutes);

export default routes;
