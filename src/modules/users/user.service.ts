// src/modules/users/user.service.ts
// Fake in-memory DB
let users = [
  { id: '1', name: 'Ammar', role: 'admin' },
  { id: '2', name: 'John', role: 'user' },
  { id: '3', name: 'Alice', role: 'developer' }
]

export default {
  getAll: () => users,
  getOne: (id: string) => users.find(u => u.id === id),
  create: (data: any) => {
    const newUser = { id: Date.now().toString(), ...data }
    users.push(newUser)
    return newUser
  },
  update: (id: string, data: any) => {
    users = users.map(u => (u.id === id ? { ...u, ...data } : u))
    return users.find(u => u.id === id)
  },
  delete: (id: string) => {
    users = users.filter(u => u.id !== id)
  }
}