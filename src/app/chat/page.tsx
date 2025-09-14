'use client'

import { useState, useRef, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  MessageCircle,
  Zap,
  AlertCircle
} from 'lucide-react'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function ChatPage() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy tu asistente de fitness personalizado. ¿En qué puedo ayudarte hoy? Puedo explicarte ejercicios, crear planes de entrenamiento o responder cualquier pregunta sobre fitness.',
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          userId: session?.user?.id,
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getMessageCount = () => {
    return messages.filter(m => m.role === 'user').length
  }

  const isFreeUser = session?.user?.role === 'FREE'
  const messageLimit = 5
  const canSendMessage = !isFreeUser || getMessageCount() < messageLimit

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-fitness-primary rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Chat con CFit AI</h1>
            <p className="text-muted-foreground">Tu entrenador personal inteligente</p>
          </div>
        </div>

        {isFreeUser && (
          <Card className="mb-6 border-fitness-primary/20 bg-fitness-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-fitness-primary" />
                <span className="text-sm text-foreground">
                  Plan Gratuito: {getMessageCount()}/{messageLimit} mensajes usados hoy
                </span>
                <Badge variant="fitness" className="ml-auto">
                  <Zap className="w-3 h-3 mr-1" />
                  Upgrade
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Messages */}
      <Card className="h-[600px] flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-fitness-primary text-white'
                    : 'bg-muted text-foreground'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.role === 'assistant' && (
                    <Bot className="w-5 h-5 text-fitness-primary mt-0.5 flex-shrink-0" />
                  )}
                  {message.role === 'user' && (
                    <User className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString('es-ES', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-foreground rounded-lg p-4 max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-fitness-primary" />
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">CFit AI está escribiendo...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                canSendMessage 
                  ? "Pregúntame sobre ejercicios, entrenamientos o fitness..."
                  : "Has alcanzado el límite de mensajes. ¡Upgrade para continuar!"
              }
              disabled={!canSendMessage || isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || !canSendMessage || isLoading}
              variant="fitness"
              size="icon"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
          
          {!canSendMessage && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              <MessageCircle className="w-4 h-4 inline mr-1" />
              Upgrade a Premium para mensajes ilimitados
            </p>
          )}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Preguntas Frecuentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "¿Cómo hacer sentadillas correctamente?",
            "Crea un plan de entrenamiento para principiantes",
            "¿Cuál es la mejor rutina para bajar de peso?",
            "Explica la técnica de press de banca"
          ].map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start text-left h-auto p-3"
              onClick={() => setInput(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
