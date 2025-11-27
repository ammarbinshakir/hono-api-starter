// src/utils/response.ts
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export const successResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message
})

export const errorResponse = (error: string, message?: string): ApiResponse => ({
  success: false,
  error,
  message
})

export const createdResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message: message || 'Resource created successfully'
})

export const notFoundResponse = (message = 'Resource not found'): ApiResponse => ({
  success: false,
  error: 'NOT_FOUND',
  message
})