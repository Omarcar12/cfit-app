import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createTestUsers() {
  try {
    console.log('🚀 Creando usuarios de prueba...')

    // Usuario Básico (FREE)
    const basicUser = await prisma.user.create({
      data: {
        name: 'Usuario Básico',
        email: 'basico@test.com',
        password: await bcrypt.hash('123456', 12),
        role: 'FREE',
        subscription: {
          create: {
            status: 'ACTIVE',
            plan: 'BASIC',
            stripeCustomerId: 'cus_basic_test',
          }
        }
      },
      include: {
        subscription: true
      }
    })

    // Usuario Premium
    const premiumUser = await prisma.user.create({
      data: {
        name: 'Usuario Premium',
        email: 'premium@test.com',
        password: await bcrypt.hash('123456', 12),
        role: 'SUBSCRIBER',
        subscription: {
          create: {
            status: 'ACTIVE',
            plan: 'PREMIUM',
            stripeCustomerId: 'cus_premium_test',
            stripeCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          }
        }
      },
      include: {
        subscription: true
      }
    })

    // Usuario Pro
    const proUser = await prisma.user.create({
      data: {
        name: 'Usuario Pro',
        email: 'pro@test.com',
        password: await bcrypt.hash('123456', 12),
        role: 'ADMIN',
        subscription: {
          create: {
            status: 'ACTIVE',
            plan: 'PRO',
            stripeCustomerId: 'cus_pro_test',
            stripeCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          }
        }
      },
      include: {
        subscription: true
      }
    })

    console.log('✅ Usuarios creados exitosamente:')
    console.log('\n📱 Usuario Básico:')
    console.log(`   Email: ${basicUser.email}`)
    console.log(`   Contraseña: 123456`)
    console.log(`   Plan: ${basicUser.subscription?.plan}`)
    console.log(`   Rol: ${basicUser.role}`)

    console.log('\n⭐ Usuario Premium:')
    console.log(`   Email: ${premiumUser.email}`)
    console.log(`   Contraseña: 123456`)
    console.log(`   Plan: ${premiumUser.subscription?.plan}`)
    console.log(`   Rol: ${premiumUser.role}`)

    console.log('\n👑 Usuario Pro:')
    console.log(`   Email: ${proUser.email}`)
    console.log(`   Contraseña: 123456`)
    console.log(`   Plan: ${proUser.subscription?.plan}`)
    console.log(`   Rol: ${proUser.role}`)

  } catch (error) {
    console.error('❌ Error creando usuarios:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createTestUsers()
