'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Mail, 
  Calendar, 
  Crown, 
  Settings,
  Edit,
  Dumbbell,
  Target,
  Zap
} from 'lucide-react'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-muted rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Acceso Denegado</h1>
          <p className="text-muted-foreground mb-6">
            Necesitas iniciar sesión para ver tu perfil
          </p>
          <Button variant="fitness">
            Iniciar Sesión
          </Button>
        </div>
      </div>
    )
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'FREE':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      case 'PREMIUM':
        return 'bg-fitness-primary/20 text-fitness-primary border-fitness-primary/30'
      case 'PRO':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'FREE':
        return <User className="w-4 h-4" />
      case 'PREMIUM':
        return <Crown className="w-4 h-4" />
      case 'PRO':
        return <Zap className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  const getPlanFeatures = (plan: string) => {
    switch (plan) {
      case 'FREE':
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Mi Perfil</h1>
        <p className="text-muted-foreground">
          Gestiona tu información personal y configuración de cuenta
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Información Personal
                  </CardTitle>
                  <CardDescription>
                    Tu información básica de cuenta
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-fitness-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{session.user.name || 'Usuario'}</h3>
                  <p className="text-muted-foreground">Miembro desde {new Date().toLocaleDateString('es-ES')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{session.user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Rol</p>
                    <p className="text-sm text-muted-foreground">{session.user.role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Estadísticas
              </CardTitle>
              <CardDescription>
                Tu progreso y actividad en CFit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-fitness-primary">0</div>
                  <div className="text-sm text-muted-foreground">Entrenamientos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fitness-primary">0</div>
                  <div className="text-sm text-muted-foreground">Ejercicios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fitness-primary">0</div>
                  <div className="text-sm text-muted-foreground">Minutos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fitness-primary">0</div>
                  <div className="text-sm text-muted-foreground">Días</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Plan Actual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Badge className={`${getPlanColor(session.user.role)} text-lg px-4 py-2`}>
                  {getPlanIcon(session.user.role)}
                  <span className="ml-2">{session.user.role}</span>
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Características incluidas:</h4>
                <ul className="space-y-1">
                  {getPlanFeatures(session.user.role).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-fitness-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {session.user.role === 'FREE' && (
                <Button variant="fitness" className="w-full">
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade a Premium
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Configuración
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Dumbbell className="w-4 h-4 mr-2" />
                Mis Entrenamientos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Objetivos
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-4">
                <Dumbbell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No hay actividad reciente</p>
                <p className="text-xs">Comienza un entrenamiento para ver tu progreso</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
