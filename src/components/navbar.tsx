'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AuthModal from '@/components/auth-modal'
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  Dumbbell,
  MessageCircle,
  Crown
} from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const { data: session, status } = useSession()

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-fitness-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CFit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/workouts" className="text-foreground hover:text-fitness-primary transition-colors">
              Entrenamientos
            </Link>
            <Link href="/chat" className="text-foreground hover:text-fitness-primary transition-colors">
              Chat IA
            </Link>
            <Link href="/plans" className="text-foreground hover:text-fitness-primary transition-colors">
              Planes
            </Link>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Badge variant="fitness" className="flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>{session.user.role}</span>
                </Badge>
                
                <div className="relative group">
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent">
                        <User className="w-4 h-4 mr-2" />
                        Perfil
                      </Link>
                      <Link href="/settings" className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent">
                        <Settings className="w-4 h-4 mr-2" />
                        Configuración
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => handleAuthClick('signin')}>
                  Iniciar Sesión
                </Button>
                <Button variant="fitness" onClick={() => handleAuthClick('signup')}>
                  Registrarse
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/workouts"
                className="block px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Entrenamientos
              </Link>
              <Link
                href="/chat"
                className="block px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chat IA
              </Link>
              <Link
                href="/plans"
                className="block px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Planes
              </Link>
              
              {session ? (
                <div className="pt-4 border-t border-border">
                  <div className="px-3 py-2">
                    <Badge variant="fitness" className="mb-2">
                      {session.user.role}
                    </Badge>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Configuración
                  </Link>
                  <button
                    onClick={() => {
                      signOut()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-fitness-primary transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-border space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      handleAuthClick('signin')
                      setIsOpen(false)
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    variant="fitness"
                    className="w-full"
                    onClick={() => {
                      handleAuthClick('signup')
                      setIsOpen(false)
                    }}
                  >
                    Registrarse
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </nav>
  )
}
