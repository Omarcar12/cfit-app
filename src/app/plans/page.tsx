'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Crown, 
  Zap, 
  User, 
  Check, 
  Star,
  ArrowRight,
  Dumbbell,
  MessageCircle,
  Target,
  BarChart3,
  Shield,
  Headphones,
  Sparkles
} from 'lucide-react'

export default function PlansPage() {
  const { data: session } = useSession()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 0,
      period: 'Gratis',
      description: 'Perfecto para comenzar tu journey fitness',
      icon: <User className="w-6 h-6" />,
      color: 'border-gray-500/30 bg-gray-500/5',
      buttonColor: 'bg-gray-500 hover:bg-gray-600',
      features: [
        'Acceso a entrenamientos básicos',
        'Chat con IA limitado (5 mensajes/día)',
        'Perfil básico',
        'Comunidad de usuarios'
      ],
      limitations: [
        'Entrenamientos premium bloqueados',
        'Sin planes personalizados',
        'Soporte por email'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 9.99,
      period: 'mes',
      description: 'La opción más popular para usuarios serios',
      icon: <Crown className="w-6 h-6" />,
      color: 'border-fitness-primary/30 bg-fitness-primary/5',
      buttonColor: 'bg-fitness-primary hover:bg-fitness-primary/90',
      features: [
        'Acceso a todos los entrenamientos',
        'Chat con IA ilimitado',
        'Planes de entrenamiento personalizados',
        'Seguimiento de progreso avanzado',
        'Sin anuncios',
        'Soporte prioritario',
        'Contenido exclusivo'
      ],
      limitations: [],
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 19.99,
      period: 'mes',
      description: 'Para atletas y entrenadores profesionales',
      icon: <Zap className="w-6 h-6" />,
      color: 'border-purple-500/30 bg-purple-500/5',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      features: [
        'Todo lo de Premium',
        'Entrenamientos personalizados por IA',
        'Análisis avanzado de progreso',
        'Soporte prioritario 24/7',
        'Acceso anticipado a nuevas funciones',
        'Integración con wearables',
        'Coaching personalizado',
        'API para desarrolladores'
      ],
      limitations: [],
      popular: false
    }
  ]

  const getCurrentPlan = () => {
    if (!session) return null
    return session.user.role.toLowerCase()
  }

  const handleSelectPlan = (planId: string) => {
    if (planId === 'basic') {
      // Plan básico es gratis, no requiere pago
      alert('¡El plan básico ya está activo!')
      return
    }
    
    setSelectedPlan(planId)
    // Aquí iría la lógica de pago con Stripe
    alert(`Redirigiendo al pago para el plan ${planId}...`)
  }

  const isCurrentPlan = (planId: string) => {
    const currentPlan = getCurrentPlan()
    return currentPlan === planId
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Elige tu Plan Perfecto
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Encuentra el plan que se adapte a tus objetivos fitness. 
          Todos los planes incluyen acceso completo a nuestra comunidad.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <Card 
            key={plan.id}
            className={`relative transition-all duration-300 hover:scale-105 ${
              plan.popular ? 'ring-2 ring-fitness-primary shadow-lg' : ''
            } ${plan.color}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-fitness-primary text-white px-4 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Más Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                plan.id === 'basic' ? 'bg-gray-500/10 text-gray-500' :
                plan.id === 'premium' ? 'bg-fitness-primary/10 text-fitness-primary' :
                'bg-purple-500/10 text-purple-500'
              }`}>
                {plan.icon}
              </div>
              
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              
              <div className="mt-4">
                <div className="text-4xl font-bold text-foreground">
                  ${plan.price}
                  {plan.price > 0 && (
                    <span className="text-lg font-normal text-muted-foreground">
                      /{plan.period}
                    </span>
                  )}
                </div>
                {plan.price === 0 && (
                  <div className="text-lg text-muted-foreground">Para siempre</div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Características incluidas:
                </h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              {plan.limitations.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-muted-foreground">
                    Limitaciones:
                  </h3>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0">×</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4">
                {isCurrentPlan(plan.id) ? (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    disabled
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Plan Actual
                  </Button>
                ) : (
                  <Button 
                    className={`w-full ${plan.buttonColor} text-white`}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    {plan.price === 0 ? (
                      <>
                        <User className="w-4 h-4 mr-2" />
                        Activar Gratis
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Elegir Plan
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Comparison */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center">Comparación de Características</CardTitle>
          <CardDescription className="text-center">
            Compara todas las características entre planes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Característica</th>
                  <th className="text-center py-3 px-4">Básico</th>
                  <th className="text-center py-3 px-4">Premium</th>
                  <th className="text-center py-3 px-4">Pro</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { feature: 'Entrenamientos básicos', basic: true, premium: true, pro: true },
                  { feature: 'Entrenamientos premium', basic: false, premium: true, pro: true },
                  { feature: 'Chat con IA (5 mensajes/día)', basic: true, premium: false, pro: false },
                  { feature: 'Chat con IA ilimitado', basic: false, premium: true, pro: true },
                  { feature: 'Planes personalizados', basic: false, premium: true, pro: true },
                  { feature: 'Seguimiento de progreso', basic: false, premium: true, pro: true },
                  { feature: 'Análisis avanzado', basic: false, premium: false, pro: true },
                  { feature: 'Soporte prioritario', basic: false, premium: true, pro: true },
                  { feature: 'Sin anuncios', basic: false, premium: true, pro: true },
                  { feature: 'Acceso anticipado', basic: false, premium: false, pro: true }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-4">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.basic ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">×</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.premium ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">×</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">×</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Preguntas Frecuentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
              <p className="text-sm text-muted-foreground">
                Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplicarán inmediatamente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">¿Hay período de prueba gratuito?</h3>
              <p className="text-sm text-muted-foreground">
                El plan básico es completamente gratuito. Los planes premium incluyen 7 días de prueba.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-sm text-muted-foreground">
                Aceptamos tarjetas de crédito, PayPal y otros métodos de pago seguros.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">¿Puedo cancelar mi suscripción?</h3>
              <p className="text-sm text-muted-foreground">
                Sí, puedes cancelar tu suscripción en cualquier momento desde tu perfil.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
