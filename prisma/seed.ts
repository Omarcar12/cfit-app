import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const usersData = [
    {
      name: 'Usuario Basic',
      email: 'basic@test.com',
      password: '123456', // puedes hashear si quieres
      role: 'BASIC',
    },
    {
      name: 'Usuario Premium',
      email: 'premium@test.com',
      password: '123456',
      role: 'PREMIUM',
    },
    {
      name: 'Usuario Pro',
      email: 'pro@test.com',
      password: '123456',
      role: 'PRO',
    },
  ];

  for (const userData of usersData) {
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }

  console.log('✅ Usuarios de prueba creados!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
