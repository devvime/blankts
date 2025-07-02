import { Router } from "express";
import { isAuthenticated } from "../../../common/middlewares/is-authenticated.middleware";
import { upload } from "../../../shared/upload";
import CreateProductController from "../controllers/create.controller";

const productRoutes = Router();

productRoutes.post("/product", isAuthenticated, upload.single("file"), CreateProductController.handle);

export default productRoutes;