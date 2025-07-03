import { Router } from "express";
import { isAuthenticated } from "../../../common/middlewares/is-authenticated.middleware";
import { upload } from "../../../shared/upload";
import CreateProductController from "../controllers/create.controller";
import UpdateProductController from "../controllers/update.controller";

const productRoutes = Router();

productRoutes.post("/product", isAuthenticated, upload.single("file"), CreateProductController.handle);
productRoutes.put("/product/:id", isAuthenticated, upload.single("file"), UpdateProductController.handle);

export default productRoutes;