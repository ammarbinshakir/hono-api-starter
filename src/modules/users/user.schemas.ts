// src/modules/users/user.schemas.ts
import { z } from 'zod'
import { createRoute } from '@hono/zod-openapi'

// Base User Schema
export const UserSchema = z.object({
  id: z.string().openapi({ 
    example: '1',
    description: 'Unique user identifier'
  }),
  name: z.string().min(1).openapi({ 
    example: 'John Doe',
    description: 'Full name of the user'
  }),
  role: z.string().min(1).openapi({ 
    example: 'admin',
    description: 'User role in the system'
  }),
  createdAt: z.string().optional().openapi({
    example: '2023-01-01T00:00:00Z',
    description: 'User creation timestamp'
  }),
  updatedAt: z.string().optional().openapi({
    example: '2023-01-01T00:00:00Z',
    description: 'Last update timestamp'
  })
})

// Request Schemas
export const CreateUserSchema = z.object({
  name: z.string().min(1, 'Name is required').openapi({ 
    example: 'Jane Smith',
    description: 'Full name of the new user'
  }),
  role: z.string().min(1, 'Role is required').openapi({ 
    example: 'developer',
    description: 'Role to assign to the user'
  })
})

export const UpdateUserSchema = z.object({
  name: z.string().min(1).optional().openapi({ 
    example: 'Jane Smith Updated',
    description: 'Updated full name'
  }),
  role: z.string().min(1).optional().openapi({ 
    example: 'senior-developer',
    description: 'Updated role'
  })
})

// Response Schemas
export const ApiResponseSchema = z.object({
  success: z.boolean().openapi({ example: true }),
  message: z.string().optional().openapi({ example: 'Operation successful' }),
  error: z.string().optional().openapi({ example: 'Error message' })
})

export const UserResponseSchema = UserSchema
export const UsersResponseSchema = z.array(UserSchema)
export const UserCreatedResponseSchema = UserSchema
export const UserUpdatedResponseSchema = UserSchema
export const UserDeletedResponseSchema = ApiResponseSchema

// Error Response Schema
export const ErrorResponseSchema = z.object({
  success: z.boolean().openapi({ example: false }),
  error: z.string().openapi({ example: 'NOT_FOUND' }),
  message: z.string().openapi({ example: 'User not found' })
})

// Route Definitions
export const getUsersRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Users'],
  summary: 'Get all users',
  description: 'Retrieve a list of all users in the system',
  responses: {
    200: {
      description: 'List of users retrieved successfully',
      content: {
        'application/json': {
          schema: UsersResponseSchema
        }
      }
    }
  }
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/{id}',
  tags: ['Users'],
  summary: 'Get user by ID',
  description: 'Retrieve a specific user by their unique identifier',
  request: {
    params: z.object({
      id: z.string().openapi({
        param: {
          name: 'id',
          in: 'path'
        },
        example: '1',
        description: 'User ID'
      })
    })
  },
  responses: {
    200: {
      description: 'User retrieved successfully',
      content: {
        'application/json': {
          schema: UserResponseSchema
        }
      }
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema
        }
      }
    }
  }
})

export const createUserRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Users'],
  summary: 'Create a new user',
  description: 'Add a new user to the system',
  request: {
    body: {
      description: 'User data to create',
      content: {
        'application/json': {
          schema: CreateUserSchema
        }
      }
    }
  },
  responses: {
    201: {
      description: 'User created successfully',
      content: {
        'application/json': {
          schema: UserCreatedResponseSchema
        }
      }
    },
    400: {
      description: 'Invalid request data',
      content: {
        'application/json': {
          schema: ErrorResponseSchema
        }
      }
    }
  }
})

export const updateUserRoute = createRoute({
  method: 'put',
  path: '/{id}',
  tags: ['Users'],
  summary: 'Update user',
  description: 'Update an existing user by their ID',
  request: {
    params: z.object({
      id: z.string().openapi({
        param: {
          name: 'id',
          in: 'path'
        },
        example: '1',
        description: 'User ID to update'
      })
    }),
    body: {
      description: 'User data to update',
      content: {
        'application/json': {
          schema: UpdateUserSchema
        }
      }
    }
  },
  responses: {
    200: {
      description: 'User updated successfully',
      content: {
        'application/json': {
          schema: UserUpdatedResponseSchema
        }
      }
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema
        }
      }
    }
  }
})

export const deleteUserRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  tags: ['Users'],
  summary: 'Delete user',
  description: 'Remove a user from the system by their ID',
  request: {
    params: z.object({
      id: z.string().openapi({
        param: {
          name: 'id',
          in: 'path'
        },
        example: '1',
        description: 'User ID to delete'
      })
    })
  },
  responses: {
    200: {
      description: 'User deleted successfully',
      content: {
        'application/json': {
          schema: UserDeletedResponseSchema
        }
      }
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema
        }
      }
    }
  }
})