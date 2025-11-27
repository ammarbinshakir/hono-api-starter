// src/app.ts
import { OpenAPIHono } from '@hono/zod-openapi'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { swaggerUI } from '@hono/swagger-ui'
import userRoutes from './modules/users/user.routes'
import errorHandler from './middlewares/error-handler'

export const app = new OpenAPIHono()

// Middlewares
app.use('*', logger())
app.use('*', prettyJSON())

// Health check
app.get('/', (c) => {
  return c.json({ 
    message: 'Welcome to Hono API!', 
    version: '1.0.0',
    status: 'healthy',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (c) => {
  return c.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

// API Documentation
app.get('/docs', swaggerUI({ url: '/openapi.json' }))
app.doc('/openapi.json', {
  openapi: '3.0.0',
  info: {
    title: 'Hono API',
    version: '1.0.0',
    description: 'A complete Hono API with type-safe validation and documentation'
  }
})

// API Routes
app.route('/users', userRoutes)

// Global error handler
app.onError(errorHandler)