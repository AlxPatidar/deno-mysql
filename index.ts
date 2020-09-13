import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from './routes/router.ts';

const app = new Application();
const env = config();

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

const port: number = parseInt(env.PORT) || 4000
// confirm server is running
console.log(`🚀 Server is listing on port ${port} 🚀`)
// create server on port 4000
await app.listen({ port });