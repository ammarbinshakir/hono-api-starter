// src/middlewares/error-handler.ts
import type { Context } from 'hono'

const handler = (err: Error, c: Context) => {
  console.error('Unhandled Error:', err)
  return c.json(
    { message: 'Internal Server Error', error: err.message },
    500
  )
}

export default handler