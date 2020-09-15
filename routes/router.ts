import { Router } from "https://deno.land/x/oak/mod.ts";

import * as UserController from '../controllers/UserController.ts';

const router = new Router();

// users restful API
router.get("/users", UserController.getUsers)
    .get("/user/:userId", UserController.getUser)
    .post("/user", UserController.createUser)
    .put("/user/:userId", UserController.updateUser)
    .delete("/user/:userId", UserController.deleteUser)

export default router