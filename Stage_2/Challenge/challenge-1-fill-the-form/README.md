
# 🚀 Challenge 01 - Aumentando la Cobertura de Pruebas

Este proyecto implementa pruebas automatizadas utilizando Playwright aplicando el patrón Page Object Model (POM) para garantizar escalabilidad, mantenibilidad y claridad en los tests.

El objetivo es evolucionar de scripts básicos a una automatización profesional, basada en buenas prácticas utilizadas en proyectos reales de QA.

---

## 📌 Objetivo del Challenge

Transformar escenarios funcionales en pruebas automatizadas:

- ✅ Claras y legibles
- ✅ Reutilizables (sin duplicación de código)
- ✅ Mantenibles mediante POM
- ✅ Ejecutables desde consola
- ✅ Con reportes automatizados

---

## 🌐 Aplicación Bajo Prueba

🔗 https://demo.automationtesting.in/Index.html

---

## 🧪 Historia de Usuario

**Registro de Nuevo Usuario**

> Como usuario que desea crear una cuenta,  
> quiero ingresar primero mi correo electrónico  
> para acceder al formulario de registro completo,  
> y completar mis datos personales sin confusiones y de manera guiada.

---

## ✅ Criterios de Aceptación

### 1. Pantalla Inicial (Ingreso de Email)

- Validación de formato de email
- Botón "Continuar":
  - Se habilita solo con email válido
  - Redirige al formulario completo

---

### 2. Formulario de Registro

#### Campos obligatorios:

- First Name
- Last Name
- Address
- Email (precargado y no editable)
- Phone
- Gender
- Skills
- Country
- Select Country (custom dropdown)
- Date of Birth
- Password / Confirm Password

#### Validaciones clave:

- Email válido y no editable
- Phone solo números
- Passwords deben coincidir
- Mensajes de error claros
- Submit solo habilitado con campos completos
- Confirmación exitosa al completar correctamente

---

## 🧠 Casos de Prueba (Gherkin)

```gherkin
Feature: Registro de usuario

  Scenario: Registro exitoso (Happy Path)
    Given el usuario ingresa un email válido
    When hace clic en continuar
    And completa todos los campos obligatorios correctamente
    And hace clic en Submit
    Then el registro se completa exitosamente

  Scenario: Campos obligatorios vacíos
    Given el usuario accede al formulario
    When hace clic en Submit sin completar campos
    Then se muestran mensajes de error en los campos obligatorios

  Scenario: Teléfono con formato inválido
    Given el usuario completa el formulario
    When ingresa letras en el campo teléfono
    Then se muestra un error de validación

  Scenario: Passwords no coinciden
    Given el usuario completa el formulario
    When ingresa passwords diferentes
    Then se muestra un error indicando que no coinciden
```

---

## 🏗️ Arquitectura del Proyecto (POM)

```
/pages
  ├── LoginPage.js
  ├── RegisterPage.js

/tests
  ├── register.spec.js

/utils
  ├── testData.js

/docs
  ├── test-cases.md
```


## ⚙️ Instalación y Configuración

### 1. Clonar repositorio

```bash
git clone <TU_REPO_URL>
cd challenge-01-playwright
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar Playwright

```bash
npx playwright install
```

---

## ▶️ Ejecución de Pruebas

### Ejecutar todos los tests

```bash
npx playwright test
```

### Ejecutar en modo UI

```bash
npx playwright test --ui
```

### Ejecutar en modo debug

```bash
npx playwright test --debug
```

---

## 📊 Reportes

```bash
npx playwright show-report
```

