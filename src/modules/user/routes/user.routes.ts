import { Router } from "express";
import { isAuthenticated } from "@middlewares/is-authenticated.middleware";
import userController from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get('/user', isAuthenticated, userController.index);
userRoutes.get('/user/me', isAuthenticated, userController.show);
userRoutes.get('/user/:id', isAuthenticated, userController.show);
userRoutes.post('/user', userController.store);
userRoutes.put('/user', isAuthenticated, userController.update);
userRoutes.delete('/user/:id', isAuthenticated, userController.destroy);

export default userRoutes;