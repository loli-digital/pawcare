# AGENTS.md

# PawCare

Aplicación web de gestión de mascotas desarrollada con React, TypeScript y Sass.

## Objetivo

PawCare es una aplicación SaaS para que propietarios de mascotas puedan gestionar:

- Información de sus mascotas.
- Seguimiento del peso.
- Medicación.
- Historial médico.
- Citas veterinarias.
- Recordatorios.
- Alimentación.

La aplicación está pensada para uso real y requiere autenticación para acceder.

---

# Stack tecnológico

- React
- TypeScript
- Sass
- React Router
- Recharts (gráficas)
- React Hook Form
- Zod
- Base de datos pendiente de decidir (Firebase, Supabase o alternativa)

---

# Diseño

## Estilo

- Dashboard SaaS moderno.
- Inspirado en Linear, Notion y Stripe.
- No debe parecer una clínica veterinaria tradicional.
- No debe parecer una aplicación infantil.

## Modo claro

### Fondo

```scss
#F8FAFC
```

### Superficie

```scss
#FFFFFF
```

### Superficie secundaria

```scss
#F1F5F9
```

### Texto principal

```scss
#0F172A
```

### Texto secundario

```scss
#475569
```

### Texto terciario

```scss
#64748B
```

### Color principal

```scss
#7C3AED
```

### Hover principal

```scss
#6D28D9
```

### Éxito

```scss
#14B8A6
```

### Advertencia

```scss
#F59E0B
```

### Error

```scss
#EF4444
```

### Información

```scss
#3B82F6
```

### Bordes

```scss
#E2E8F0
```

---

# Navegación principal

Sidebar:

```txt
Inicio
Mascotas
Salud
Calendario

────────────

Ajustes
Mi perfil
Cerrar sesión
```

---

# Arquitectura

```txt
src/
├── assets/
├── layouts/
├── pages/
├── features/
├── components/
├── services/
├── hooks/
├── router/
├── types/
├── styles/
├── App.tsx
└── main.tsx
```

---

# Rutas principales

## Públicas

```txt
/
Landing

/login
Login

/register
Registro

/onboarding
Alta primera mascota
```

## Privadas

```txt
/ dashboard

/ pets

/ pets/new

/ pets/:id

/ pets/:id/edit

/ health

/ calendar

/ settings

/ profile
```

---

# Dashboard

## Cards resumen

- Mascotas registradas
- Próximas citas
- Medicaciones activas
- Recordatorios pendientes

## Cards

- SummaryCard
- QuickActionsCard
- WeightCard
- UpcomingAppointmentsCard
- ActiveMedicationCard
- NutritionCard
- RemindersCard
- ActivityCard

---

# Sección Mascotas

## Listado

Mostrar:

- Foto
- Nombre
- Raza
- Sexo
- Edad
- Peso actual

Última card:

```txt
+ Añadir mascota
```

---

# Ficha de mascota

## Datos generales

- Foto
- Nombre
- Tipo mascota
- Raza
- Sexo
- Fecha nacimiento
- Número chip
- Color

## Información médica

- Peso ideal
- Esterilizado
- Grupo sanguíneo
- Alergias
- Enfermedades
- Observaciones

## Veterinario

- Nombre clínica
- Teléfono clínica
- Veterinario habitual

## Alimentación

- Marca pienso
- Variedad
- Cantidad diaria

La ficha NO debe mostrar:

- Historial médico completo
- Calendario completo
- Gráficas completas
- Listado de citas

Estas funcionalidades pertenecen a otras secciones.

---

# Formularios de mascota

## Formulario onboarding

Se muestra tras el registro.

Campos:

- Foto
- Nombre
- Tipo mascota
- Raza
- Sexo
- Fecha nacimiento
- Peso actual

Objetivo:

Registrar la primera mascota rápidamente.

---

## Formulario completo

Usado para editar el perfil de una mascota.

### Datos generales

- Foto
- Nombre
- Tipo mascota
- Raza
- Sexo
- Fecha nacimiento
- Número chip
- Color

### Información médica

- Peso ideal
- Esterilizado
- Grupo sanguíneo
- Alergias
- Enfermedades
- Observaciones

### Veterinario

- Nombre clínica
- Teléfono clínica
- Veterinario habitual

### Alimentación

- Marca pienso
- Variedad
- Cantidad diaria

---

# Sección Salud

La sección Salud contiene 3 bloques principales:

## Peso

- Gráfica de evolución
- Registrar peso
- Historial de pesos

Filtros:

```txt
Mascota
Periodo
```

Periodos:

```txt
7 días
1 mes
3 meses
6 meses
1 año
Todo el historial
```

Mostrar:

```txt
Peso actual

+0.3 kg respecto al periodo anterior

Dentro del peso ideal
```

---

## Medicación

- Medicaciones activas
- Historial de tratamientos
- Añadir medicación

---

## Historial médico

Timeline histórica.

Tipos:

- Revisión
- Vacuna
- Enfermedad
- Tratamiento
- Cirugía
- Urgencia
- Otro

Formulario:

- Fecha
- Tipo
- Título
- Descripción
- Veterinario
- Clínica

---

# Sección Calendario

## Eventos

Dos tipos:

### Citas

- Fecha
- Hora
- Título
- Mascota
- Clínica
- Veterinario

### Recordatorios

- Fecha
- Título
- Mascota
- Descripción

---

## Funcionalidades

```txt
+ Nueva cita
+ Nuevo recordatorio
```

---

## Calendario mensual

Mostrar:

- Citas (azul)
- Recordatorios (naranja)

Hover:

Mostrar resumen del evento.

---

# Ajustes

## Apariencia

- Claro
- Oscuro
- Sistema

## Recordatorios automáticos

Opciones:

- Peso sin actualizar
- Próximas citas
- Medicación próxima a finalizar
- Vacunas próximas

## Unidades

- Kilogramos
- Libras

## Calendario

Configuraciones relacionadas.

## Exportación de datos

Exportar datos del usuario.

---

# Mi perfil

## Información personal

- Foto
- Nombre
- Correo electrónico
- Fecha de registro

## Seguridad

- Cambiar contraseña
- Eliminar cuenta

---

# Tipos globales

Ubicación:

```txt
src/types/
```

Archivos:

```txt
pet.types.ts
appointment.types.ts
medication.types.ts
reminder.types.ts
medical-record.types.ts
```

Contienen únicamente modelos de negocio reutilizables.

---

# Regla para TypeScript

Tipos globales:

```txt
src/types/
```

Ejemplos:

```ts
Pet
Appointment
Reminder
Medication
MedicalRecord
```

Tipos específicos de un componente:

```txt
SummaryCard.types.ts
PetCard.types.ts
WeightCard.types.ts
```

Se guardan junto al componente y solo si son necesarios.

---

# Convenciones

## Componentes simples

```txt
Component/
├── Component.tsx
└── Component.scss
```

## Componentes medianos

```txt
Component/
├── Component.tsx
├── Component.scss
└── Component.types.ts
```

## Componentes complejos

```txt
Component/
├── Component.tsx
├── Component.scss
├── Component.types.ts
├── Component.constants.ts
└── Component.utils.ts
```

---

# Objetivo UX

La aplicación debe responder claramente a:

- Mascotas → ¿Quién es esta mascota?
- Salud → ¿Cuál es su estado de salud?
- Calendario → ¿Qué tengo pendiente?
- Dashboard → ¿Qué información importante debo ver de un vistazo?

Evitar duplicar funcionalidades entre secciones.