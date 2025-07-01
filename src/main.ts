import 'express-async-errors';
import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import { serverError } from './middlewares/error.middleware';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(userRoutes);
app.use(serverError);

app.listen(3333, () => console.log('Server running on port: 3333'));