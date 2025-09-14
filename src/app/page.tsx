import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Dumbbell, 
  Brain, 
  Target, 
  Zap, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Crown,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fitness-dark via-fitness-darker to-fitness-dark">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge variant="fitness" className="mb-6 animate-fade-in">
              <Crown className="w-4 h-4 mr-1" />
              Entrenador Personal con IA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transforma tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fitness-primary to-fitness-accent">
                cuerpo
              </span>{' '}
              con CFit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Entrenamientos personalizados, seguimiento inteligente y consejos expertos. 
              Tu viaje hacia una vida más saludable comienza aquí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" variant="fitness" className="text-lg px-8 py-3">
                Comenzar Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-fitness-dark">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir CFit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinamos tecnología de vanguardia con experiencia en fitness para ofrecerte la mejor experiencia de entrenamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-primary/20 transition-colors">
                  <Brain className="w-6 h-6 text-fitness-primary" />
                </div>
                <CardTitle>IA Personalizada</CardTitle>
                <CardDescription>
                  Entrenamientos adaptados a tu nivel, objetivos y preferencias usando inteligencia artificial avanzada.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-secondary/20 transition-colors">
                  <Target className="w-6 h-6 text-fitness-secondary" />
                </div>
                <CardTitle>Objetivos Claros</CardTitle>
                <CardDescription>
                  Define tus metas y recibe un plan estructurado para alcanzarlas de manera eficiente y segura.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-accent/20 transition-colors">
                  <Zap className="w-6 h-6 text-fitness-accent" />
                </div>
                <CardTitle>Resultados Rápidos</CardTitle>
                <CardDescription>
                  Optimiza tu tiempo con entrenamientos eficaces que maximizan los resultados en menos tiempo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-fitness-primary" />
                </div>
                <CardTitle>Chat con Expertos</CardTitle>
                <CardDescription>
                  Pregunta cualquier duda sobre ejercicios, nutrición o técnicas a nuestro asistente IA especializado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-secondary/20 transition-colors">
                  <Users className="w-6 h-6 text-fitness-secondary" />
                </div>
                <CardTitle>Comunidad Activa</CardTitle>
                <CardDescription>
                  Conecta con otros usuarios, comparte progresos y mantén la motivación en tu viaje fitness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="fitness-card group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-fitness-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fitness-accent/20 transition-colors">
                  <Dumbbell className="w-6 h-6 text-fitness-accent" />
                </div>
                <CardTitle>Ejercicios Variados</CardTitle>
                <CardDescription>
                  Accede a una biblioteca completa de ejercicios con instrucciones detalladas y variaciones.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elige tu Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comienza gratis y escala según tus necesidades. Todos los planes incluyen acceso a nuestra IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Gratuito */}
            <Card className="fitness-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-foreground mt-4">
                  Gratis
                </div>
                <CardDescription>
                  Perfecto para comenzar tu viaje fitness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Entrenamientos básicos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Chat IA limitado (5/día)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Perfil básico</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            {/* Plan Premium */}
            <Card className="fitness-card border-fitness-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="fitness" className="px-4 py-1">
                  Más Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold text-foreground mt-4">
                  $9.99
                  <span className="text-lg text-muted-foreground">/mes</span>
                </div>
                <CardDescription>
                  Para usuarios serios sobre su fitness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Todos los entrenamientos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Chat IA ilimitado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Planes personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Seguimiento de progreso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Sin anuncios</span>
                  </li>
                </ul>
                <Button variant="fitness" className="w-full mt-6">
                  Elegir Premium
                </Button>
              </CardContent>
            </Card>

            {/* Plan Pro */}
            <Card className="fitness-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold text-foreground mt-4">
                  $19.99
                  <span className="text-lg text-muted-foreground">/mes</span>
                </div>
                <CardDescription>
                  Para atletas y entusiastas avanzados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Todo lo de Premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Entrenamientos IA personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Análisis avanzado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Soporte prioritario</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fitness-primary mr-3" />
                    <span>Acceso anticipado</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Elegir Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-fitness-primary to-fitness-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu vida?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a miles de usuarios que ya están alcanzando sus objetivos con CFit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-fitness-primary">
              Ver Testimonios
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
