import { PrismaClient } from '@prisma/client';
// @ts-ignore
import * as bcrypt from 'bcryptjs'; // <-- Cambiado de bcrypt a bcryptjs

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: 'Usuario Basic', email: 'basic_user@test.com', password: await bcrypt.hash('123456', 10), role: 'BASIC' },
    { name: 'Usuario Premium', email: 'premium_user@test.com', password: await bcrypt.hash('123456', 10), role: 'PREMIUM' },
    { name: 'Usuario Pro', email: 'pro_user@test.com', password: await bcrypt.hash('123456', 10), role: 'PRO' },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Usuarios seed creados!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
