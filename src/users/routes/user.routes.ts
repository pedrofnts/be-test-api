import express from "express";
import { userController } from "../factories/user.factory";

const userRoutes = express.Router();

userRoutes.get("/", userController.findAll.bind(userController));
userRoutes.get("/:id", userController.findById.bind(userController));

export default userRoutes;
