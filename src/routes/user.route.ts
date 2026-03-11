import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.post("/", userController.create);

router.get("/search", userController.search);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export const userRouter = router;
