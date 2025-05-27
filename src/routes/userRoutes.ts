import Router from "express";

import users from "../controllers/usersController.js";

const router = Router();

router.route("/").post(users.createNewUser);
router.route("/").get(users.getAllUsers);
router.route("/:id").get(users.getUser);
router.route("/delete/:id").delete(users.deleteUser);
router.route("/update").patch(users.updateUser);

export default router;
