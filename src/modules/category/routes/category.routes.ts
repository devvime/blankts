import { Router } from "express";
import { isAuthenticated } from "../../../common/middlewares/is-authenticated.middleware";
import CreateCategoryController from "../controllers/create.controller";
import EditCategoryController from "../controllers/edit.controller";
import ListCategoryController from "../controllers/list.controller"

const categoryRoutes = Router();

categoryRoutes.get('/category', isAuthenticated, ListCategoryController.handle);
categoryRoutes.post('/category', isAuthenticated, CreateCategoryController.handle);
categoryRoutes.put('/category/:id', isAuthenticated, EditCategoryController.handle);

export default categoryRoutes;