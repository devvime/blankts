import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/is-authenticated.middleware";
import { upload } from "../../../shared/upload";
import CreateProductController from "../controllers/create.controller";
import UpdateProductController from "../controllers/update.controller";
import ListProductByCategoryController from "../controllers/list-by-category.controller";
import DeleteProductController from "../controllers/delete.controller";

const productRoutes = Router();

productRoutes.get("/product", isAuthenticated, ListProductByCategoryController.handle);
productRoutes.post("/product", isAuthenticated, upload.single("file"), CreateProductController.handle);
productRoutes.put("/product/:id", isAuthenticated, upload.single("file"), UpdateProductController.handle);
productRoutes.delete("/product/:id", isAuthenticated, DeleteProductController.handle);

export default productRoutes;