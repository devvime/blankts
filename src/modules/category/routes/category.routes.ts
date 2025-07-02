import { Router } from "express";
import { isAuthenticated } from "../../../common/middlewares/is-authenticated.middleware";
import CreateCategoryController from "../controllers/create-category.controller";

const categoryRoutes = Router();

categoryRoutes.post('/category', isAuthenticated, CreateCategoryController.handle);

export default categoryRoutes;