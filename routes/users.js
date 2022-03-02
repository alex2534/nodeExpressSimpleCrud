import express from "express";
const router = express.Router();
import {
	getUser,
	userCreate,
	getUserById,
	updateUserById,
	deleteUser,
} from "../controllers/users.js";

//all routes in here are starting with /users
router.get("/", getUser);

router.post("/", userCreate);

router.get("/:id", getUserById);

router.patch("/:id", updateUserById);

router.delete("/:id", deleteUser);

export default router;
