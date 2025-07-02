import express from "express";
import { serverError } from "./common/middlewares/error.middleware";
import userRoutes from './modules/user/routes/user.routes';
import categoryRoutes from "./modules/category/routes/category.routes";

const app = express();

app.use(express.json());
app.use(serverError);
app.use(userRoutes);
app.use(categoryRoutes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running on port: ${process.env.PORT || '3333'}`)
});