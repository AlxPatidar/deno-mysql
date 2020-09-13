import { Router } from "https://deno.land/x/oak/mod.ts";

import * as UserController from '../controllers/UserController.ts';

const router = new Router();

// users restful API
router.get("/users", UserController.getUsers)
    .get("/user/:id", UserController.getUser)
    .post("/user", UserController.createUser)
    .put("/user/:id", UserController.updateUser)
    .delete("/user/:id", UserController.deleteUser)

export default router