import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	// Timing
	const ms = Date.now() - start;
	ctx.response.headers.set("X-Response-Time", `${ms}ms`);
	// Logger
	const rt = ctx.response.headers.get("X-Response-Time");
	console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// apply routes middleware for read routes
app.use(router.routes())
app.use(router.allowedMethods())

// create get route
router.get("/", ({ response }) => {
	response.body = "Hello World!";
})

// confirm server is running
console.log('🚀 Server is listing on port 4000 🚀')
// create server on port 4000
await app.listen({ port: 4000 });