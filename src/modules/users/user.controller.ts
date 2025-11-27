// src/modules/users/user.controller.ts
import { createRoute } from '@hono/zod-openapi'
import userService from './user.service'
import {
  getUsersRoute,
  getUserRoute,
  createUserRoute,
  updateUserRoute,
  deleteUserRoute
} from './user.schemas'

export const getAllUsers = (c: any) => {
  const users = userService.getAll()
  return c.json(users, 200)
}

export const getUser = (c: any) => {
  const { id } = c.req.valid('param')
  const user = userService.getOne(id)
  
  if (!user) {
    return c.json({
      success: false,
      error: 'NOT_FOUND',
      message: 'User not found'
    }, 404)
  }
  
  return c.json(user, 200)
}

export const createUser = async (c: any) => {
  const body = c.req.valid('json')
  const user = userService.create(body)
  return c.json(user, 201)
}

export const updateUser = async (c: any) => {
  const { id } = c.req.valid('param')
  const body = c.req.valid('json')
  
  const existingUser = userService.getOne(id)
  if (!existingUser) {
    return c.json({
      success: false,
      error: 'NOT_FOUND',
      message: 'User not found'
    }, 404)
  }
  
  const updated = userService.update(id, body)
  return c.json(updated!, 200)
}

export const deleteUser = (c: any) => {
  const { id } = c.req.valid('param')
  
  const existingUser = userService.getOne(id)
  if (!existingUser) {
    return c.json({
      success: false,
      error: 'NOT_FOUND',
      message: 'User not found'
    }, 404)
  }
  
  userService.delete(id)
  return c.json({ 
    success: true,
    message: 'User deleted successfully'
  }, 200)
}