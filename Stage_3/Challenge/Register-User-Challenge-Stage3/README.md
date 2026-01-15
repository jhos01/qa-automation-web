# 🧪 Playwright Automation Project: Register form

Este proyecto contiene pruebas automatizadas con Playwright usando JavaScript y el Playwright Test Runner, siguiendo buenas prácticas como el uso de Page Object Model como patron de diseño y assertions

## 📦 Escenarios automatizados

**El proyecto contiene 4 escenarios de prueba automatizados dentro del test accessform.spec.js:**
- El usuario puede llenar el formulario "Register" satisfactoriamente completando todos los campos obligatorios con valores validos
- El usuario no puede enviar el formulario si Password y Confirm Password fields no coinciden
- El usuario no puede enviar el formulario si mas de 1 campo obligatorio esta incompleto(Ejemplo: Last Name)
- El usuario no puede enviar el formulario vacio

## 📦 Package – ¿para qué sirve?

**El archivo `package.json` define:**
- Dependencias del proyecto (Playwright)
- Scripts para ejecutar comandos comunes
- Metadatos básicos del proyecto

Playwright necesita dos pasos:
1.	Instalar la librería (npm)
2.	Instalar los navegadores (Playwright)

----

## ▶️ Scripts disponibles

| Script | Comando | ¿Para qué sirve? |
|------|--------|------------------|
| `test` | `npm test` | Ejecuta todos los tests en modo headless |
| `test:headed` | `npm run test:headed` | Ejecuta los tests con navegador visible |
| `test:ui` | `npm run test:ui` | Abre el Test Runner UI de Playwright |
| `test:debug` | `npm run test:debug` | Ejecuta los tests en modo debug paso a paso |
| `test:trace` | `npm run test:trace` | Ejecuta tests grabando trace de la ejecución |
| `test:report` | `npm run test:report` | Genera el reporte HTML |
| `show:report` | `npm run show:report` | Abre el último reporte HTML |
| `show:trace` | `npm run show:trace` | Abre el archivo trace.zip |
| `install:browsers` | `npm run install:browsers` | Descarga los navegadores de Playwright |
----

## 🚀 Cómo usar el proyecto (pasos básicos)

1️⃣ Instalar dependencias
```bash
npm install
```
2️⃣ Instalar navegadores (solo la primera vez)
```bash
npm run install:browsers
```
3️⃣ Ejecutar los tests
```bash
npm test
npm run test:headed
```


----

## 📊 Reportes y Debugging

### 📄 Reporte HTML
Genera y visualiza el reporte de ejecución:

```bash
npm run show:report
```

----
## 👨‍💻 Autor

Jhoselin Luizaga - Trainee


----
🧠 Notas importantes
- Playwright no usa el navegador del sistema
- Los browsers se descargan y versionan automáticamente