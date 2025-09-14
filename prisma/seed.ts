import { PrismaClient } from '@prisma/client';
// @ts-ignore
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: 'Usuario Free', email: 'free@test.com', password: await bcrypt.hash('123456', 10), role: 'FREE' },
    { name: 'Usuario Basic', email: 'basic@test.com', password: await bcrypt.hash('123456', 10), role: 'BASIC' },
    { name: 'Usuario Premium', email: 'premium@test.com', password: await bcrypt.hash('123456', 10), role: 'PREMIUM' },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Usuarios seed creados!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
