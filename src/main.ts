import express from "express";
import { serverError } from "./middlewares/error.middleware";
import userRoutes from './modules/user/routes/user.routes';
import categoryRoutes from "./modules/category/routes/category.routes";
import productRoutes from "./modules/product/routes/product.routes";
import authRoutes from "./modules/auth/routes/auth.routes";

const app = express();

app.use(express.json());
app.use(serverError);
app.use(authRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running on port: ${process.env.PORT || '3333'}`)
});