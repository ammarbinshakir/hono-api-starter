// src/modules/users/user.types.ts
export interface User {
  id: string
  name: string
  role: string
  createdAt?: string
  updatedAt?: string
}

export interface CreateUserRequest {
  name: string
  role: string
}

export interface UpdateUserRequest {
  name?: string
  role?: string
}