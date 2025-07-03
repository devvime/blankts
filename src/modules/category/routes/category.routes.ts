import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/is-authenticated.middleware";
import CreateCategoryController from "../controllers/create.controller";
import EditCategoryController from "../controllers/edit.controller";
import ListCategoryController from "../controllers/list.controller";
import RemoveCategoryController from "../controllers/remove.controller";

const categoryRoutes = Router();

categoryRoutes.get('/category', isAuthenticated, ListCategoryController.handle);
categoryRoutes.post('/category', isAuthenticated, CreateCategoryController.handle);
categoryRoutes.put('/category/:id', isAuthenticated, EditCategoryController.handle);
categoryRoutes.delete('/category/:id', isAuthenticated, RemoveCategoryController.handle);

export default categoryRoutes;