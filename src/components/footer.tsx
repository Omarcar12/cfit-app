import Link from 'next/link'
import { Dumbbell, Heart, Shield, Users } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-fitness-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">CFit</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Tu entrenador personal con inteligencia artificial. Entrenamientos personalizados, 
              seguimiento de progreso y consejos expertos para alcanzar tus objetivos fitness.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-fitness-secondary" />
                <span>Hecho con pasión</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-fitness-primary" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/workouts" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Entrenamientos
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Chat IA
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CFit. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Únete a nuestra comunidad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
