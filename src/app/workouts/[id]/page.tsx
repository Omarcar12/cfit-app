'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  Target, 
  Dumbbell,
  CheckCircle,
  Circle,
  Timer,
  Zap
} from 'lucide-react'

interface Exercise {
  id: string
  name: string
  description: string
  instructions: string[]
  sets: number
  reps: number
  duration?: number
  restTime: number
  equipment: string[]
  muscleGroups: string[]
  difficulty: string
}

interface Workout {
  id: string
  title: string
  description: string
  duration: number
  difficulty: string
  category: string
  exercises: Exercise[]
}

export default function WorkoutDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())

  // Datos de ejemplo de entrenamientos
  const sampleWorkouts: Record<string, Workout> = {
    '1': {
      id: '1',
      title: 'Entrenamiento de Fuerza Completo',
      description: 'Rutina completa para desarrollar fuerza y masa muscular',
      duration: 60,
      difficulty: 'INTERMEDIATE',
      category: 'STRENGTH',
      exercises: [
        {
          id: '1',
          name: 'Sentadillas',
          description: 'Ejercicio fundamental para piernas y glúteos',
          instructions: ['Mantén la espalda recta', 'Baja como si te fueras a sentar', 'Las rodillas no deben pasar de los dedos'],
          sets: 3,
          reps: 12,
          restTime: 60,
          equipment: ['Peso corporal'],
          muscleGroups: ['Cuádriceps', 'Glúteos', 'Isquiotibiales'],
          difficulty: 'BEGINNER'
        },
        {
          id: '2',
          name: 'Press de Banca',
          description: 'Ejercicio para pecho, hombros y tríceps',
          instructions: ['Acuéstate con los pies firmes', 'Agarra la barra al ancho de los hombros', 'Baja controladamente al pecho'],
          sets: 3,
          reps: 10,
          restTime: 90,
          equipment: ['Barra', 'Banco', 'Discos'],
          muscleGroups: ['Pectorales', 'Deltoides', 'Tríceps'],
          difficulty: 'INTERMEDIATE'
        },
        {
          id: '3',
          name: 'Peso Muerto',
          description: 'Ejercicio completo para espalda y piernas',
          instructions: ['Mantén la espalda recta', 'Levanta con las piernas', 'Contrae los glúteos al final'],
          sets: 3,
          reps: 8,
          restTime: 120,
          equipment: ['Barra', 'Discos'],
          muscleGroups: ['Espalda', 'Glúteos', 'Isquiotibiales'],
          difficulty: 'ADVANCED'
        }
      ]
    },
    '2': {
      id: '2',
      title: 'HIIT Quema Grasa',
      description: 'Entrenamiento de alta intensidad para quemar calorías',
      duration: 30,
      difficulty: 'ADVANCED',
      category: 'HIIT',
      exercises: [
        {
          id: '4',
          name: 'Burpees',
          description: 'Ejercicio completo de alta intensidad',
          instructions: ['Salta hacia arriba', 'Baja a posición de plancha', 'Haz una flexión', 'Salta hacia adelante', 'Salta hacia arriba'],
          sets: 4,
          reps: 10,
          duration: 30,
          restTime: 30,
          equipment: ['Peso corporal'],
          muscleGroups: ['Todo el cuerpo'],
          difficulty: 'ADVANCED'
        },
        {
          id: '5',
          name: 'Mountain Climbers',
          description: 'Ejercicio cardiovascular intenso',
          instructions: ['Posición de plancha', 'Alterna las rodillas hacia el pecho', 'Mantén el core activo'],
          sets: 4,
          reps: 20,
          duration: 30,
          restTime: 30,
          equipment: ['Peso corporal'],
          muscleGroups: ['Core', 'Hombros', 'Piernas'],
          difficulty: 'INTERMEDIATE'
        },
        {
          id: '6',
          name: 'Jumping Jacks',
          description: 'Ejercicio cardiovascular básico',
          instructions: ['Salta separando piernas y brazos', 'Vuelve a la posición inicial', 'Mantén el ritmo constante'],
          sets: 4,
          reps: 30,
          duration: 30,
          restTime: 30,
          equipment: ['Peso corporal'],
          muscleGroups: ['Piernas', 'Hombros'],
          difficulty: 'BEGINNER'
        }
      ]
    },
    '3': {
      id: '3',
      title: 'Yoga para Principiantes',
      description: 'Sesión relajante de yoga para mejorar flexibilidad',
      duration: 45,
      difficulty: 'BEGINNER',
      category: 'YOGA',
      exercises: [
        {
          id: '7',
          name: 'Postura del Perro Boca Abajo',
          description: 'Estiramiento completo del cuerpo',
          instructions: ['Comienza en cuatro patas', 'Levanta las caderas hacia arriba', 'Estira brazos y piernas', 'Respira profundamente'],
          sets: 1,
          reps: 1,
          duration: 60,
          restTime: 0,
          equipment: ['Mat de yoga'],
          muscleGroups: ['Espalda', 'Piernas', 'Hombros'],
          difficulty: 'BEGINNER'
        },
        {
          id: '8',
          name: 'Postura del Guerrero',
          description: 'Fortalece piernas y mejora el equilibrio',
          instructions: ['Separa las piernas', 'Gira un pie hacia afuera', 'Flexiona la rodilla', 'Estira los brazos'],
          sets: 1,
          reps: 1,
          duration: 45,
          restTime: 0,
          equipment: ['Mat de yoga'],
          muscleGroups: ['Piernas', 'Core'],
          difficulty: 'BEGINNER'
        }
      ]
    }
  }

  const workoutId = params.id as string
  const workout = sampleWorkouts[workoutId]

  if (!workout) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Entrenamiento no encontrado</h1>
          <Button onClick={() => router.push('/workouts')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Entrenamientos
          </Button>
        </div>
      </div>
    )
  }

  const currentExercise = workout.exercises[currentExerciseIndex]
  const isLastExercise = currentExerciseIndex === workout.exercises.length - 1
  const progress = ((currentExerciseIndex + 1) / workout.exercises.length) * 100

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'INTERMEDIATE':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'ADVANCED':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const handleStartExercise = () => {
    setIsPlaying(true)
    if (currentExercise.duration) {
      setTimeRemaining(currentExercise.duration)
    }
  }

  const handleNextExercise = () => {
    if (!isLastExercise) {
      setCurrentExerciseIndex(prev => prev + 1)
      setIsPlaying(false)
      setTimeRemaining(0)
    } else {
      // Entrenamiento completado
      alert('¡Felicitaciones! Has completado el entrenamiento.')
      router.push('/workouts')
    }
  }

  const handleCompleteExercise = () => {
    setCompletedExercises(prev => new Set([...prev, currentExercise.id]))
    handleNextExercise()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/workouts')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Entrenamientos
        </Button>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{workout.title}</h1>
            <p className="text-muted-foreground mb-4">{workout.description}</p>
            
            <div className="flex items-center space-x-4">
              <Badge className={getDifficultyColor(workout.difficulty)}>
                {workout.difficulty}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {workout.duration} min
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Target className="w-4 h-4 mr-1" />
                {workout.category}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progreso</span>
            <span className="text-sm text-muted-foreground">
              {currentExerciseIndex + 1} de {workout.exercises.length} ejercicios
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-fitness-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Current Exercise */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{currentExercise.name}</CardTitle>
              <CardDescription>{currentExercise.description}</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              {completedExercises.has(currentExercise.id) ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Exercise Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-fitness-primary">{currentExercise.sets}</div>
              <div className="text-sm text-muted-foreground">Series</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-fitness-primary">{currentExercise.reps}</div>
              <div className="text-sm text-muted-foreground">Repeticiones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-fitness-primary">{currentExercise.restTime}s</div>
              <div className="text-sm text-muted-foreground">Descanso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-fitness-primary">{currentExercise.difficulty}</div>
              <div className="text-sm text-muted-foreground">Dificultad</div>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-semibold mb-3">Instrucciones:</h3>
            <ul className="space-y-2">
              {currentExercise.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-fitness-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-fitness-primary mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment & Muscle Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Equipamiento:</h3>
              <div className="flex flex-wrap gap-2">
                {currentExercise.equipment.map((item, index) => (
                  <Badge key={index} variant="outline">{item}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Grupos Musculares:</h3>
              <div className="flex flex-wrap gap-2">
                {currentExercise.muscleGroups.map((muscle, index) => (
                  <Badge key={index} variant="outline">{muscle}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Timer */}
          {currentExercise.duration && (
            <div className="text-center">
              <div className="text-4xl font-bold text-fitness-primary mb-2">
                {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">Tiempo restante</div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            {!isPlaying ? (
              <Button onClick={handleStartExercise} variant="fitness" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Iniciar Ejercicio
              </Button>
            ) : (
              <Button onClick={() => setIsPlaying(false)} variant="outline" size="lg">
                <Pause className="w-5 h-5 mr-2" />
                Pausar
              </Button>
            )}
            
            <Button onClick={handleCompleteExercise} variant="fitness" size="lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              Completar Ejercicio
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Exercise List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Ejercicios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {workout.exercises.map((exercise, index) => (
              <div 
                key={exercise.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  index === currentExerciseIndex 
                    ? 'border-fitness-primary bg-fitness-primary/5' 
                    : 'border-border'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    completedExercises.has(exercise.id)
                      ? 'bg-green-500 text-white'
                      : index === currentExerciseIndex
                      ? 'bg-fitness-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {completedExercises.has(exercise.id) ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{exercise.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {exercise.sets} series × {exercise.reps} repeticiones
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentExerciseIndex(index)}
                >
                  Ver
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
