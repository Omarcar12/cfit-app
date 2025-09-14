# CFit - Entrenador Personal con IA

CFit es una aplicación web moderna de fitness que combina entrenamientos personalizados con inteligencia artificial para ofrecer una experiencia única de entrenamiento.

## 🚀 Características Principales

- **🤖 Chat con IA**: Asistente personalizado para explicar ejercicios y crear planes de entrenamiento
- **💪 Entrenamientos Variados**: Biblioteca completa de rutinas para todos los niveles
- **👥 Sistema de Roles**: Administrador, Suscriptor y Usuario Gratuito
- **🎨 Diseño Oscuro Moderno**: Interfaz elegante y fácil de usar
- **📊 Seguimiento de Progreso**: Monitorea tu evolución fitness
- **💳 Sistema de Suscripciones**: Planes Premium y Pro con Stripe

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: NextAuth.js
- **IA**: OpenAI GPT-3.5-turbo
- **Pagos**: Stripe
- **Deployment**: Vercel (recomendado)

## 📋 Requisitos Previos

- Node.js 18+ 
- PostgreSQL
- Cuenta de OpenAI
- Cuenta de Stripe (opcional)

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd cfit-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Edita `.env.local` con tus credenciales:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/cfit_db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="tu-clave-secreta-aqui"
   OPENAI_API_KEY="tu-clave-openai"
   GOOGLE_CLIENT_ID="tu-google-client-id"
   GOOGLE_CLIENT_SECRET="tu-google-client-secret"
   ```

4. **Configura la base de datos**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

6. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
cfit-app/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── api/            # API Routes
│   │   ├── chat/           # Página de chat con IA
│   │   ├── workouts/       # Página de entrenamientos
│   │   └── layout.tsx      # Layout principal
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes UI base
│   │   ├── navbar.tsx     # Barra de navegación
│   │   └── footer.tsx     # Pie de página
│   ├── lib/               # Utilidades y configuración
│   │   ├── auth.ts        # Configuración NextAuth
│   │   ├── openai.ts      # Integración OpenAI
│   │   ├── prisma.ts      # Cliente Prisma
│   │   └── utils.ts       # Utilidades generales
│   └── types/             # Tipos TypeScript
├── prisma/
│   └── schema.prisma      # Esquema de base de datos
└── public/                # Archivos estáticos
```

## 🗄️ Esquema de Base de Datos

### Usuarios y Autenticación
- **User**: Información del usuario con roles (ADMIN, SUBSCRIBER, FREE)
- **Account**: Cuentas OAuth (Google, etc.)
- **Session**: Sesiones de usuario

### Suscripciones
- **Subscription**: Planes de suscripción con Stripe
- Estados: ACTIVE, INACTIVE, CANCELED, PAST_DUE
- Planes: BASIC, PREMIUM, PRO

### Entrenamientos
- **Workout**: Rutinas de entrenamiento
- **Exercise**: Ejercicios individuales
- Categorías: STRENGTH, CARDIO, HIIT, YOGA, PILATES, CROSSFIT
- Dificultades: BEGINNER, INTERMEDIATE, ADVANCED

### Chat con IA
- **ChatMessage**: Historial de conversaciones con la IA

## 🔐 Sistema de Roles

### Usuario Gratuito (FREE)
- Acceso a entrenamientos básicos
- Chat con IA limitado (5 mensajes/día)
- Perfil básico

### Usuario Premium (SUBSCRIBER)
- Acceso a todos los entrenamientos
- Chat con IA ilimitado
- Planes de entrenamiento personalizados
- Seguimiento de progreso
- Sin anuncios

### Administrador (ADMIN)
- Acceso completo a todas las funciones
- Panel de administración
- Gestión de usuarios y contenido

## 🤖 Integración con IA

La aplicación utiliza OpenAI GPT-3.5-turbo para:

- **Explicar ejercicios**: Técnica correcta, errores comunes, consejos de seguridad
- **Crear planes de entrenamiento**: Rutinas personalizadas según objetivos
- **Responder consultas**: Preguntas sobre fitness, nutrición, técnicas
- **Adaptar contenido**: Respuestas según el nivel del usuario

## 💳 Sistema de Suscripciones

Integración con Stripe para:
- Procesamiento de pagos
- Gestión de suscripciones
- Webhooks para actualizaciones de estado
- Facturación automática

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras plataformas

- **Railway**: Para base de datos PostgreSQL
- **Supabase**: Alternativa a PostgreSQL
- **PlanetScale**: Base de datos MySQL alternativa

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run db:push      # Sincronizar esquema con DB
npm run db:studio    # Abrir Prisma Studio
npm run db:generate  # Generar cliente Prisma
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

## 🎯 Roadmap

- [ ] App móvil (React Native)
- [ ] Integración con wearables
- [ ] Video llamadas con entrenadores
- [ ] Comunidad y redes sociales
- [ ] Análisis avanzado de progreso
- [ ] Integración con nutrición

---

**¡Construido con ❤️ para la comunidad fitness!**
