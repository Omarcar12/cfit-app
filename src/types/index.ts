// Tipos personalizados para la aplicación (compatible con SQLite)
export type UserRole = 'ADMIN' | 'SUBSCRIBER' | 'FREE'
export type SubscriptionStatus = 'ACTIVE' | 'INACTIVE' | 'CANCELED' | 'PAST_DUE'
export type SubscriptionPlan = 'BASIC' | 'PREMIUM' | 'PRO'
export type Difficulty = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
export type Category = 'STRENGTH' | 'CARDIO' | 'FLEXIBILITY' | 'HIIT' | 'YOGA' | 'PILATES' | 'CROSSFIT'
export type MessageRole = 'USER' | 'ASSISTANT'

export interface User {
  id: string
  name: string | null
  email: string
  emailVerified: Date | null
  image: string | null
  role: UserRole
  subscription?: Subscription | null
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id: string
  userId: string
  stripeCustomerId: string | null
  stripeSubscriptionId: string | null
  stripePriceId: string | null
  stripeCurrentPeriodEnd: Date | null
  status: SubscriptionStatus
  plan: SubscriptionPlan
  createdAt: Date
  updatedAt: Date
}

export interface Workout {
  id: string
  title: string
  description: string | null
  duration: number
  difficulty: Difficulty
  category: Category
  exercises: Exercise[]
  userId: string | null
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Exercise {
  id: string
  name: string
  description: string | null
  instructions: string[]
  sets: number | null
  reps: number | null
  duration: number | null
  restTime: number | null
  equipment: string[]
  muscleGroups: string[]
  difficulty: Difficulty
  workoutId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface ChatMessage {
  id: string
  content: string
  role: MessageRole
  userId: string | null
  createdAt: Date
}

export interface WorkoutPlan {
  id: string
  name: string
  description: string
  duration: number // semanas
  difficulty: Difficulty
  workouts: Workout[]
  isPremium: boolean
}

export interface AIResponse {
  message: string
  suggestions?: string[]
  workoutRecommendations?: Workout[]
}

export interface SubscriptionTier {
  name: string
  price: number
  features: string[]
  plan: SubscriptionPlan
}

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    name: 'Básico',
    price: 0,
    features: [
      'Acceso a entrenamientos básicos',
      'Chat con IA limitado (5 mensajes/día)',
      'Perfil básico'
    ],
    plan: 'BASIC'
  },
  {
    name: 'Premium',
    price: 9.99,
    features: [
      'Acceso a todos los entrenamientos',
      'Chat con IA ilimitado',
      'Planes de entrenamiento personalizados',
      'Seguimiento de progreso',
      'Sin anuncios'
    ],
    plan: 'PREMIUM'
  },
  {
    name: 'Pro',
    price: 19.99,
    features: [
      'Todo lo de Premium',
      'Entrenamientos personalizados por IA',
      'Análisis avanzado de progreso',
      'Soporte prioritario',
      'Acceso anticipado a nuevas funciones'
    ],
    plan: 'PRO'
  }
]

export const DIFFICULTY_LABELS = {
  BEGINNER: 'Principiante',
  INTERMEDIATE: 'Intermedio',
  ADVANCED: 'Avanzado'
}

export const CATEGORY_LABELS = {
  STRENGTH: 'Fuerza',
  CARDIO: 'Cardio',
  FLEXIBILITY: 'Flexibilidad',
  HIIT: 'HIIT',
  YOGA: 'Yoga',
  PILATES: 'Pilates',
  CROSSFIT: 'CrossFit'
}
