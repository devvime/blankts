import router from "./router";
import CreateUserController from "../controllers/user/create-user.controller";

const userRoutes = router;

userRoutes.post('/user', CreateUserController.handle);

export default userRoutes;