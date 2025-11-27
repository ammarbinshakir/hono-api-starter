# Hono API Learning Project

A complete, production-ready Hono API with TypeScript, following best practices for structure and organization.

## 🚀 Features

- **Clean Architecture**: Modular structure with controllers, services, and routes
- **TypeScript**: Full TypeScript support with proper configurations
- **OpenAPI Documentation**: Auto-generated Swagger UI and OpenAPI 3.0 spec
- **Schema Validation**: Type-safe request/response validation with Zod
- **Middleware**: Error handling, logging, and JSON formatting
- **CRUD Operations**: Complete user management API with validation
- **Health Checks**: Built-in health monitoring endpoints
- **Hot Reload**: Development server with automatic restarts

## 📁 Project Structure

```
src/
├── app.ts                 # Main Hono app configuration
├── server.ts             # Server entry point
├── config/
│   └── env.ts           # Environment configuration
├── middlewares/
│   └── error-handler.ts # Global error handler
├── modules/
│   └── users/
│       ├── user.routes.ts     # User API routes
│       ├── user.controller.ts # User controllers
│       ├── user.service.ts    # User business logic
│       └── user.types.ts      # User type definitions
└── utils/
    └── response.ts       # API response utilities
```

## 🛠 Installation

```bash
npm install
```

## 🏃 Running the Application

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📡 API Endpoints

### Documentation
- `GET /docs` - Interactive Swagger UI documentation
- `GET /openapi.json` - OpenAPI 3.0 specification

### Health Checks
- `GET /` - Welcome message
- `GET /health` - Health status with uptime

### User Management (All with automatic validation)
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user (validates required fields)
- `PUT /users/:id` - Update user (validates input data)
- `DELETE /users/:id` - Delete user

## 🧪 Testing the API

### Interactive Testing
Visit `http://localhost:3001/docs` for the **Swagger UI** - try all endpoints interactively!

### cURL Examples
```bash
# Get all users
curl -X GET "http://localhost:3001/users"

# Get specific user
curl -X GET "http://localhost:3001/users/1"

# Create new user (with validation)
curl -X POST "http://localhost:3001/users" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice","role":"developer"}'

# Test validation (this will fail)
curl -X POST "http://localhost:3001/users" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"","role":"developer"}'

# Update user
curl -X PUT "http://localhost:3001/users/1" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Updated Name","role":"admin"}'

# Delete user
curl -X DELETE "http://localhost:3001/users/1"
```

## 🎯 Next Steps

This base structure is ready for:

1. **Database Integration** (PostgreSQL + Prisma/Drizzle)
2. **Authentication** (JWT + Refresh tokens)
3. **Caching** (Redis integration)
4. **File Uploads** (Multipart handling)
5. **Validation** (Zod schemas)
6. **Rate Limiting** (Protection middleware)
7. **Docker** (Containerization)
8. **Testing** (Unit and integration tests)

## 🏗 Technologies Used

- **Hono** - Fast web framework
- **@hono/zod-openapi** - OpenAPI 3.0 spec generation with Zod
- **@hono/swagger-ui** - Interactive API documentation
- **Zod** - Schema validation and TypeScript inference
- **TypeScript** - Type safety
- **@hono/node-server** - Node.js adapter
- **nodemon** - Development auto-reload
- **ts-node** - TypeScript execution

---

Ready to build amazing APIs with Hono! 🔥