import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { message, userId } = await request.json()

    if (!message || !userId) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 })
    }

    // Verificar límites para usuarios gratuitos
    if (session.user.role === 'FREE') {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      const messageCount = await prisma.chatMessage.count({
        where: {
          userId: userId,
          role: 'USER',
          createdAt: {
            gte: today
          }
        }
      })

      if (messageCount >= 5) {
        return NextResponse.json({ 
          error: 'Has alcanzado el límite de mensajes diarios. Upgrade a Premium para mensajes ilimitados.' 
        }, { status: 429 })
      }
    }

    // Guardar mensaje del usuario
    await prisma.chatMessage.create({
      data: {
        content: message,
        role: 'USER',
        userId: userId
      }
    })

    // Respuestas predefinidas para modo de prueba
    const responses = {
      'sentadillas': 'Las sentadillas son un ejercicio fundamental. Mantén la espalda recta, baja como si te fueras a sentar en una silla, y asegúrate de que las rodillas no pasen de los dedos de los pies. ¡Perfecto para fortalecer piernas y glúteos!',
      'plan': 'Para crear un plan de entrenamiento necesito saber: tu nivel actual, objetivos específicos, tiempo disponible y equipamiento. ¿Podrías contarme más sobre estos aspectos?',
      'peso': 'Para bajar de peso, combina ejercicio cardiovascular (caminar, correr, ciclismo) con entrenamiento de fuerza. La clave está en crear un déficit calórico sostenible y mantener la consistencia.',
      'press': 'El press de banca requiere técnica cuidadosa. Acuéstate con los pies firmes en el suelo, agarra la barra con las manos separadas al ancho de los hombros, y baja controladamente hasta el pecho antes de empujar hacia arriba.',
      'default': '¡Excelente pregunta! Como asistente de fitness, puedo ayudarte con ejercicios, planes de entrenamiento y consejos de nutrición. ¿Hay algo específico en lo que te gustaría que profundice?'
    }

    // Buscar respuesta apropiada
    let aiResponse = responses.default
    const messageLower = message.toLowerCase()
    
    if (messageLower.includes('sentadilla')) aiResponse = responses.sentadillas
    else if (messageLower.includes('plan') || messageLower.includes('rutina')) aiResponse = responses.plan
    else if (messageLower.includes('peso') || messageLower.includes('adelgazar')) aiResponse = responses.peso
    else if (messageLower.includes('press') || messageLower.includes('banca')) aiResponse = responses.press

    // Agregar nota sobre el modo de prueba
    aiResponse += '\n\n⚠️ **Modo de prueba**: Esta es una respuesta simulada. Para obtener respuestas personalizadas con IA, configura tu API key de OpenAI con créditos disponibles.'

    // Guardar respuesta simulada
    await prisma.chatMessage.create({
      data: {
        content: aiResponse,
        role: 'ASSISTANT',
        userId: userId
      }
    })

    return NextResponse.json({ message: aiResponse })

  } catch (error) {
    console.error('Error en chat API:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}