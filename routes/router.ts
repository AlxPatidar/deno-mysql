import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

// create get route
router.get("/", ({ response }) => {
    response.body = "Hello World!";
})

export default router