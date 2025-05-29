import { login, signup } from "../controllers/authController.js";

import express from "express";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);

export default authRouter;
