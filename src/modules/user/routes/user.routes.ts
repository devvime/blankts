import { Router } from "express";
import CreateUserController from "../controllers/create-user.controller";
import AuthUserController from "../controllers/auth-user.controller";
import DetailUserController from "../controllers/detail-user.controller";
import { isAuthenticated } from "../../../common/middlewares/is-authenticated.middleware";
import RemoveUserController from "../controllers/remove-user.controller";

const userRoutes = Router();

userRoutes.post('/user', CreateUserController.handle);
userRoutes.delete('/user/:id', isAuthenticated, RemoveUserController.handle);
userRoutes.get('/me', isAuthenticated, DetailUserController.handle);
userRoutes.post('/session', AuthUserController.handle);

export default userRoutes;