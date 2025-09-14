import { UserRole } from "@prisma/client"  // 👈 cambia esto, no desde '@/types'

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: UserRole   // ahora sí es el enum correcto de Prisma
    }
  }

  interface User {
    id: string
    email: string
    name: string
    role: UserRole
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    name: string
    role: UserRole
  }
}
