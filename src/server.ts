// src/server.ts
import { serve } from '@hono/node-server'
import { app } from './app'
import config from './config/env'

console.log(`🔥 Hono server running at http://localhost:${config.PORT}`)
console.log(`📊 Environment: ${config.NODE_ENV}`)
console.log(`🚀 Ready to accept requests!`)

serve({
  fetch: app.fetch,
  port: config.PORT
})