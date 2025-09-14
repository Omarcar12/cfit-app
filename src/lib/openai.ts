import OpenAI from 'openai'
import { Workout, Exercise, Difficulty, Category } from '@/types'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface ChatContext {
  userRole: string
  subscriptionPlan: string
  recentWorkouts?: Workout[]
  userPreferences?: {
    difficulty: Difficulty
    categories: Category[]
    availableTime: number
  }
}

export async function generateAIResponse(
  message: string,
  context: ChatContext
): Promise<string> {
  try {
    const systemPrompt = `Eres CFit AI, un asistente especializado en fitness y entrenamientos. 

Información del usuario:
- Rol: ${context.userRole}
- Plan de suscripción: ${context.subscriptionPlan}
- Preferencias: ${context.userPreferences ? JSON.stringify(context.userPreferences) : 'No especificadas'}

Instrucciones:
1. Proporciona consejos de fitness y explicaciones de ejercicios de manera clara y motivadora
2. Adapta tus respuestas según el plan de suscripción del usuario
3. Si el usuario tiene plan gratuito, menciona las limitaciones pero mantén un tono positivo
4. Incluye consejos de seguridad y técnica adecuada
5. Usa un tono profesional pero amigable
6. Responde en español
7. Si no tienes información suficiente, pregunta por detalles específicos

Responde de manera concisa pero completa.`

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || "Lo siento, no pude procesar tu consulta en este momento."
  } catch (error) {
    console.error('Error generating AI response:', error)
    return "Lo siento, hay un problema técnico. Por favor, intenta de nuevo más tarde."
  }
}

export async function generateWorkoutPlan(
  userPreferences: {
    difficulty: Difficulty
    categories: Category[]
    availableTime: number
    goals: string[]
  }
): Promise<Partial<Workout>[]> {
  try {
    const prompt = `Genera un plan de entrenamiento personalizado con las siguientes especificaciones:

- Dificultad: ${userPreferences.difficulty}
- Categorías preferidas: ${userPreferences.categories.join(', ')}
- Tiempo disponible: ${userPreferences.availableTime} minutos por sesión
- Objetivos: ${userPreferences.goals.join(', ')}

Responde con un JSON que contenga un array de entrenamientos con la siguiente estructura:
{
  "workouts": [
    {
      "title": "Nombre del entrenamiento",
      "description": "Descripción breve",
      "duration": número_en_minutos,
      "difficulty": "BEGINNER|INTERMEDIATE|ADVANCED",
      "category": "STRENGTH|CARDIO|FLEXIBILITY|HIIT|YOGA|PILATES|CROSSFIT",
      "exercises": [
        {
          "name": "Nombre del ejercicio",
          "description": "Descripción del ejercicio",
          "instructions": ["Instrucción 1", "Instrucción 2"],
          "sets": número_de_series,
          "reps": número_de_repeticiones,
          "restTime": tiempo_de_descanso_en_segundos,
          "equipment": ["equipo1", "equipo2"],
          "muscleGroups": ["grupo1", "grupo2"],
          "difficulty": "BEGINNER|INTERMEDIATE|ADVANCED"
        }
      ]
    }
  ]
}`

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres un experto en fitness que genera planes de entrenamiento personalizados. Responde siempre con JSON válido." },
        { role: "user", content: prompt }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content
    if (response) {
      const parsed = JSON.parse(response)
      return parsed.workouts || []
    }

    return []
  } catch (error) {
    console.error('Error generating workout plan:', error)
    return []
  }
}

export async function explainExercise(exercise: Exercise): Promise<string> {
  try {
    const prompt = `Explica detalladamente cómo realizar el ejercicio "${exercise.name}".

Información del ejercicio:
- Descripción: ${exercise.description || 'No disponible'}
- Instrucciones: ${exercise.instructions.join(', ')}
- Series: ${exercise.sets || 'No especificado'}
- Repeticiones: ${exercise.reps || 'No especificado'}
- Duración: ${exercise.duration ? `${exercise.duration} segundos` : 'No especificado'}
- Tiempo de descanso: ${exercise.restTime ? `${exercise.restTime} segundos` : 'No especificado'}
- Equipamiento: ${exercise.equipment.join(', ')}
- Grupos musculares: ${exercise.muscleGroups.join(', ')}
- Dificultad: ${exercise.difficulty}

Proporciona:
1. Técnica correcta paso a paso
2. Errores comunes a evitar
3. Consejos de seguridad
4. Modificaciones según el nivel de dificultad
5. Beneficios del ejercicio

Responde en español de manera clara y motivadora.`

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres un entrenador personal experto que explica ejercicios de manera clara y segura." },
        { role: "user", content: prompt }
      ],
      max_tokens: 800,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || "No pude generar la explicación en este momento."
  } catch (error) {
    console.error('Error explaining exercise:', error)
    return "Lo siento, hay un problema técnico. Por favor, intenta de nuevo más tarde."
  }
}
