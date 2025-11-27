// src/modules/users/user.routes.ts
import { OpenAPIHono } from '@hono/zod-openapi'
import * as userController from './user.controller'
import {
  getUsersRoute,
  getUserRoute,
  createUserRoute,
  updateUserRoute,
  deleteUserRoute
} from './user.schemas'

const userRoutes = new OpenAPIHono()

userRoutes.openapi(getUsersRoute, userController.getAllUsers)
userRoutes.openapi(getUserRoute, userController.getUser)
userRoutes.openapi(createUserRoute, userController.createUser)
userRoutes.openapi(updateUserRoute, userController.updateUser)
userRoutes.openapi(deleteUserRoute, userController.deleteUser)

export default userRoutes