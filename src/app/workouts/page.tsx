'use client'

import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Dumbbell, 
  Clock, 
  Target, 
  Filter,
  Search,
  Play,
  Star,
  Users,
  Zap,
  Lock
} from 'lucide-react'
import { Workout, Difficulty, Category } from '@/types'

export default function WorkoutsPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'ALL'>('ALL')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL')
  const [isLoading, setIsLoading] = useState(true)

  // Datos de ejemplo
  const sampleWorkouts: Workout[] = [
    {
      id: '1',
      title: 'Entrenamiento de Fuerza Completo',
      description: 'Rutina completa para desarrollar fuerza y masa muscular',
      duration: 60,
      difficulty: 'INTERMEDIATE',
      category: 'STRENGTH',
      exercises: [],
      userId: null,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'HIIT Quema Grasa',
      description: 'Entrenamiento de alta intensidad para quemar calorías',
      duration: 30,
      difficulty: 'ADVANCED',
      category: 'HIIT',
      exercises: [],
      userId: null,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      title: 'Yoga para Principiantes',
      description: 'Sesión relajante de yoga para mejorar flexibilidad',
      duration: 45,
      difficulty: 'BEGINNER',
      category: 'YOGA',
      exercises: [],
      userId: null,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4',
      title: 'Cardio Intenso',
      description: 'Entrenamiento cardiovascular para mejorar resistencia',
      duration: 40,
      difficulty: 'INTERMEDIATE',
      category: 'CARDIO',
      exercises: [],
      userId: null,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5',
      title: 'CrossFit WOD',
      description: 'Workout of the Day - Entrenamiento funcional completo',
      duration: 50,
      difficulty: 'ADVANCED',
      category: 'CROSSFIT',
      exercises: [],
      userId: null,
      isPublic: false, // Solo para usuarios premium
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setWorkouts(sampleWorkouts)
      setFilteredWorkouts(sampleWorkouts)
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = workouts

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((workout: Workout) =>
        workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workout.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtrar por dificultad
    if (selectedDifficulty !== 'ALL') {
      filtered = filtered.filter((workout: Workout) => workout.difficulty === selectedDifficulty)
    }

    // Filtrar por categoría
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter((workout: Workout) => workout.category === selectedCategory)
    }

    setFilteredWorkouts(filtered)
  }, [workouts, searchTerm, selectedDifficulty, selectedCategory])

  const getDifficultyColor = (difficulty: Difficulty) => {
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

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'STRENGTH':
        return <Dumbbell className="w-4 h-4" />
      case 'CARDIO':
        return <Zap className="w-4 h-4" />
      case 'HIIT':
        return <Target className="w-4 h-4" />
      case 'YOGA':
        return <Users className="w-4 h-4" />
      default:
        return <Dumbbell className="w-4 h-4" />
    }
  }

  const canAccessWorkout = (workout: Workout) => {
    if (workout.isPublic) return true
    if (!session) return false
    return session.user.role !== 'FREE'
  }

  const handleStartWorkout = (workoutId: string) => {
    router.push(`/workouts/${workoutId}`)
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Entrenamientos</h1>
        <p className="text-muted-foreground">
          Descubre rutinas de entrenamiento diseñadas por expertos y personalizadas por IA
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar entrenamientos..."
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedDifficulty}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDifficulty(e.target.value as Difficulty | 'ALL')}
              className="px-3 py-2 bg-background border border-input rounded-md text-sm"
            >
              <option value="ALL">Todas las dificultades</option>
              <option value="BEGINNER">Principiante</option>
              <option value="INTERMEDIATE">Intermedio</option>
              <option value="ADVANCED">Avanzado</option>
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value as Category | 'ALL')}
              className="px-3 py-2 bg-background border border-input rounded-md text-sm"
            >
              <option value="ALL">Todas las categorías</option>
              <option value="STRENGTH">Fuerza</option>
              <option value="CARDIO">Cardio</option>
              <option value="HIIT">HIIT</option>
              <option value="YOGA">Yoga</option>
              <option value="PILATES">Pilates</option>
              <option value="CROSSFIT">CrossFit</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de entrenamientos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout: Workout) => (
          <Card 
            key={workout.id} 
            className={`fitness-card group hover:scale-105 transition-all duration-300 ${
              !canAccessWorkout(workout) ? 'opacity-60' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-fitness-primary/10 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(workout.category)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{workout.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {workout.description}
                    </CardDescription>
                  </div>
                </div>
                
                {!workout.isPublic && (
                  <Lock className="w-4 h-4 text-fitness-primary" />
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(workout.difficulty)}>
                    {workout.difficulty}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {workout.duration} min
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {workout.category}
                  </Badge>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    4.8
                  </div>
                </div>
                
                <div className="pt-2">
                  {canAccessWorkout(workout) ? (
                    <Button 
                      variant="fitness" 
                      className="w-full group-hover:shadow-lg transition-all"
                      onClick={() => handleStartWorkout(workout.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Comenzar Entrenamiento
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Requiere Premium
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <div className="text-center py-12">
          <Dumbbell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No se encontraron entrenamientos
          </h3>
          <p className="text-muted-foreground">
            Intenta ajustar los filtros o términos de búsqueda
          </p>
        </div>
      )}
    </div>
  )
}
