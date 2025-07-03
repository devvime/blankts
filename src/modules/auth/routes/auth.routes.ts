import { Router } from "express";
import authController from "../controllers/auth.controller"

const authRoutes = Router();

authRoutes.post('/session', authController.handle);

export default authRoutes;