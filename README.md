# 🦷 Elytech Dental - Clínica Dental Moderna

<div align="center"
**Sitio web profesional para clínica dental con tecnología de vanguardia**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

</div>

---

## 📋 Tabla de Contenidos

- [🚀 Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Instalación](#-instalación)
- [⚙️ Configuración](#️-configuración)
- [🏃 Uso](#-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Diseño](#-diseño)
- [📧 Sistema de Email](#-sistema-de-email)
- [🔧 API Endpoints](#-api-endpoints)
- [🚀 Despliegue](#-despliegue)
- [🧪 Testing](#-testing)
- [📚 Documentación](#-documentación)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## 🚀 Características

### 🌟 **Frontend Moderno**
- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Interfaz Intuitiva**: UX/UI moderno con animaciones suaves
- **Accesibilidad**: Cumple con estándares WCAG 2.1 AA
- **Performance**: Carga rápida y optimizada (Core Web Vitals)

### 🏥 **Funcionalidades Médicas**
- **Catálogo de Servicios**: Odontología general, estética, ortodoncia, implantología
- **Equipo Médico**: Perfiles detallados de especialistas
- **Testimonios**: Sistema de reseñas de pacientes
- **Citas Online**: Formulario de contacto integrado

### 🔧 **Backend Robusto**
- **API RESTful**: Express.js con TypeScript
- **Sistema de Email**: Nodemailer con plantillas HTML
- **Validación**: Sanitización y validación de datos
- **Seguridad**: CORS, rate limiting, validación de inputs

### 📱 **Características Técnicas**
- **Progressive Web App (PWA)** ready
- **SEO Optimizado**: Meta tags, structured data
- **Analytics**: Google Analytics 4 integration
- **Multi-idioma**: Soporte para español e inglés

---

## 🛠️ Tecnologías

### **Frontend**
```bash
HTML5 + CSS3 + Vanilla JavaScript
├── 🎨 CSS Grid & Flexbox
├── 📱 Responsive Design
├── ✨ CSS Animations
└── 🚀 Modern ES6+ Features
```

### **Backend**
```bash
Node.js + TypeScript + Express.js
├── 📧 Nodemailer (Email Service)
├── 🔒 Express Validator
├── 🌐 CORS Middleware
└── 🛡️ Security Headers
```

### **Herramientas de Desarrollo**
```bash
Development Tools
├── 📦 NPM Package Manager
├── 🔧 TypeScript Compiler
├── 🎯 ESLint + Prettier
└── 🚀 Nodemon (Development)
```

---

## 📦 Instalación

### **Prerrequisitos**
- Node.js (v16 o superior)
- NPM o Yarn
- Cuenta de Gmail (para envío de emails)

### **Clonar el Repositorio**
```bash
git clone https://github.com/wildbergerlopezk.github.io
cd dentalClinic
```

### **Instalar Dependencias**
```bash
# Backend
npm install

# Si usas Yarn
yarn install
```

### **Dependencias Principales**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/nodemailer": "^6.4.14",
    "@types/cors": "^2.8.17",
    "typescript": "^5.3.2",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.1"
  }
}
```

---

## ⚙️ Configuración

### **Variables de Entorno**
Crear archivo `.env` en la raíz del proyecto:

```env
# Configuración del Servidor
PORT=3001
# Configuración de Email (Gmail)
MAIL_USER=tu-email@gmail.com
MAIL_PASS=tu-app-password
MAIL_RECEIVER=clinica@elytech-dental.com

# Configuración de CORS (opcional)
ALLOWED_ORIGINS=http://localhost:3000,https://tu-dominio.com
```

### **Configurar Gmail App Password**
1. Habilitar 2FA en tu cuenta de Gmail
2. Generar App Password específica
3. Usar la App Password en `MAIL_PASS`

### **Configuración TypeScript**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 🏃 Uso

### **Desarrollo Local**
```bash
# Modo desarrollo con hot reload
npm run dev

# O con Yarn
yarn dev
```

### **Producción**
```bash
# Compilar TypeScript
npm run build

# Iniciar servidor de producción
npm start
```

### **Scripts Disponibles**
```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

---

## 📁 Estructura del Proyecto

```
elytech-dental/
│
├── 📁 src/                    # Código fuente del backend
│   ├── 📁 routes/            # Rutas de la API
│   │   └── contact.ts        # Endpoint de contacto
│   ├── 📁 utils/             # Utilidades
│   │   └── mailer.ts         # Configuración de email
│   ├── 📁 types/             # Definiciones TypeScript
│   ├── 📁 middleware/        # Middlewares Express
│   └── index.ts              # Punto de entrada
├── 📁 dist/                  # Código compilado (auto-generado)
├── 📁 docs/                  # Documentación
├── 📁 tests/                 # Tests unitarios
│
├── .env.example              # Ejemplo de variables de entorno
├── .gitignore               # Archivos ignorados por Git
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
├── README.md                # Este archivo
```

---

## 🎨 Diseño

### **Sistema de Colores**
```css
:root {
  --primary-color: #2563eb;     /* Azul médico profesional */
  --secondary-color: #06b6d4;   /* Azul claro confianza */
  --accent-color: #10b981;      /* Verde salud */
  --success-color: #059669;     /* Verde éxito */
  --warning-color: #d97706;     /* Naranja advertencia */
  --error-color: #dc2626;       /* Rojo error */
}
```

### **Tipografía**
- **Primary**: Inter (Sans-serif moderna)
- **Display**: Playfair Display (Serif elegante)
- **Tamaños**: Sistema escalable con rem units

### **Componentes**
- ✅ Navbar responsivo con scroll effects
- ✅ Hero section con animaciones
- ✅ Cards de servicios interactivas
- ✅ Formularios estilizados
- ✅ Footer completo
- ✅ Sistema de notificaciones

---

## 📧 Sistema de Email

### **Configuración Nodemailer**
```typescript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
```

### **Plantilla HTML**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #2563eb;">Nuevo Mensaje de Contacto</h2>
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
    <h3>Datos del Paciente:</h3>
    <ul>
      <li><strong>Nombre:</strong> {{name}}</li>
      <li><strong>Email:</strong> {{email}}</li>
      <li><strong>Teléfono:</strong> {{phone}}</li>
      <li><strong>Servicio:</strong> {{service}}</li>
    </ul>
    <p><strong>Mensaje:</strong><br/>{{message}}</p>
  </div>
</div>
```

### **Validaciones**
- ✅ Campos obligatorios
- ✅ Formato de email válido
- ✅ Sanitización de HTML
- ✅ Rate limiting
- ✅ Protección CSRF

---

## 🔧 API Endpoints

### **POST /api/contact**
Envía un mensaje de contacto desde el formulario web.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "service": "string (optional)",
  "message": "string (required)"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Response Error (400):**
```json
{
  "error": "Campos obligatorios faltantes"
}
```

**Response Error (500):**
```json
{
  "success": false,
  "message": "Error interno del servidor"
}
```

### **Ejemplo de Uso**
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+34 600 123 456',
    service: 'ortodoncia',
    message: 'Quisiera información sobre Invisalign'
  })
});

const data = await response.json();
console.log(data);
```

---

## 🚀 Despliegue

### **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Configuración vercel.json**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.ts"
    }
  ]
}
```

### **Heroku**
```bash
# Login en Heroku
heroku login

# Crear app
heroku create elytech-dental

# Deploy
git push heroku main
```

### **Docker**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

---

## 🧪 Testing

### **Configuración Jest**
```bash
npm install --save-dev jest @types/jest ts-jest supertest @types/supertest
```

### **Ejemplo de Test**
```typescript
import request from 'supertest';
import app from '../src/index';

describe('POST /api/contact', () => {
  it('should send contact form successfully', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        phone: '123456789',
        message: 'Test message'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should return error for missing fields', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});
```

### **Ejecutar Tests**
```bash
npm test              # Ejecutar todos los tests
npm run test:watch    # Modo watch
npm run test:coverage # Coverage report
```

---

## 📚 Documentación

### **Recursos Adicionales**
- 📖 [Guía de Contribución](CONTRIBUTING.md)
- 🔧 [Configuración de Desarrollo](docs/development.md)
- 🎨 [Guía de Diseño](docs/design-system.md)
- 🚀 [Guía de Despliegue](docs/deployment.md)
- 🔒 [Políticas de Seguridad](SECURITY.md)

### **API Documentation**
La documentación completa de la API está disponible en `/docs/api.md` o puedes usar herramientas como Postman para explorar los endpoints.

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee la [guía de contribución](CONTRIBUTING.md) antes de enviar un PR.

### **Proceso de Contribución**
1. 🍴 Fork el proyecto
2. 🌿 Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔃 Abrir un Pull Request

### **Estándares de Código**
- ✅ Usar TypeScript para tipado fuerte
- ✅ Seguir ESLint + Prettier configuration
- ✅ Escribir tests para nuevas funcionalidades
- ✅ Documentar cambios en el README
- ✅ Usar conventional commits

## 👥 Equipo de Desarrollo

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/wildbergerlopezk">
        <br />
        <sub><b>Kevin Olaf Wildberger Lopez</b></sub>
      </a>
      <br />
      <sub>💻 Desarrollador Principal</sub>
    </td>
  </tr>
</table>

---

## 📈 Roadmap

### **v1.1.0** (Q2 2024)
- [ ] 🌐 Sistema de multi-idioma
- [ ] 📅 Integración con Google Calendar
- [ ] 💳 Pasarela de pagos
- [ ] 📱 App móvil PWA

### **v1.2.0** (Q3 2024)
- [ ] 🤖 Chatbot con IA
- [ ] 📊 Dashboard de administración
- [ ] 🔔 Sistema de notificaciones push
- [ ] 📈 Analytics avanzado

### **v2.0.0** (Q4 2024)
- [ ] 🏥 Portal del paciente
- [ ] 📋 Historia clínica digital
- [ ] 🎥 Videoconsultas
- [ ] 🔐 Autenticación JWT

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

Hecho con ❤️ por Kevin Wildberger

[⬆ Volver arriba](#-elytech-dental---clínica-dental-moderna)

</div>
<img width="1376" height="1014" alt="server" src="https://github.com/user-attachments/assets/e038c07d-a4da-4fe4-b25d-d1081ca6b66b" />
<img width="1798" height="1736" alt="nodemailer" src="https://github.com/user-attachments/assets/a87f3ded-2ef8-442f-b0ba-ac8c4c4fa635" />
<img width="1764" height="1584" alt="contact" src="https://github.com/user-attachments/assets/78e33273-9696-43e1-a895-c47d89ce0e99" />

