import { serve } from 'https://deno.land/std@0.68.0/http/server.ts'

// create server on port 4000
const server = serve({ port: 4000 })
// confirm server is running
console.log('🚀 Server is listing on port 4000 🚀')

// response on request
for await (const req of server) {
	req.respond({ body: 'Hello world!' })
}
