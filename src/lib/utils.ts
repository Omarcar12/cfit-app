import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (hours > 0) {
    return `${hours}h ${mins}m`
  }
  return `${mins}m`
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateWorkoutCalories(duration: number, difficulty: string): number {
  const baseCalories = duration * 8 // Base de 8 calorías por minuto
  
  switch (difficulty) {
    case 'BEGINNER':
      return Math.round(baseCalories * 0.8)
    case 'INTERMEDIATE':
      return Math.round(baseCalories)
    case 'ADVANCED':
      return Math.round(baseCalories * 1.3)
    default:
      return Math.round(baseCalories)
  }
}

export function getSubscriptionFeatures(plan: string): string[] {
  switch (plan) {
    case 'BASIC':
      return [
        'Acceso a entrenamientos básicos',
        'Chat con IA limitado (5 mensajes/día)',
        'Perfil básico'
      ]
    case 'PREMIUM':
      return [
        'Acceso a todos los entrenamientos',
        'Chat con IA ilimitado',
        'Planes de entrenamiento personalizados',
        'Seguimiento de progreso',
        'Sin anuncios'
      ]
    case 'PRO':
      return [
        'Todo lo de Premium',
        'Entrenamientos personalizados por IA',
        'Análisis avanzado de progreso',
        'Soporte prioritario',
        'Acceso anticipado a nuevas funciones'
      ]
    default:
      return []
  }
}
