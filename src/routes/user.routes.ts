import router from "./router";
import CreateUserController from "../controllers/user/create-user.controller";
import AuthUserController from "../controllers/user/auth-user.controller";
import DetailUserController from "../controllers/user/detail-user.controller";
import { isAuthenticated } from "../middlewares/is-authenticated.middleware";
import RemoveUserController from "../controllers/user/remove-user.controller";

const userRoutes = router;

userRoutes.post('/user', CreateUserController.handle);
userRoutes.delete('/user/:id', isAuthenticated, RemoveUserController.handle);
userRoutes.get('/me', isAuthenticated, DetailUserController.handle);
userRoutes.post('/session', AuthUserController.handle);

export default userRoutes;