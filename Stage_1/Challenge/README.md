# Challenge1

## Automatización web con Playwright sobre `practice.expandtesting.com`

---

## Objetivo / Historia de usuario

### Objetivo
Automatizar pruebas funcionales básicas y validaciones de localizadores web usando **Playwright**, verificando visibilidad de elementos, navegación, interacción con botones, links, campos de entrada y validaciones de contenido en distintas páginas del sitio (practice.expandtesting.com)[https://practice.expandtesting.com/]

### Historia de usuario
Como **QA Automation Tester**,  
quiero automatizar la validación de elementos clave en distintas páginas del sitio,  
para comprobar que la interfaz responde correctamente y que los localizadores definidos funcionan como se espera.

---

## Criterios de aceptación

- [x] Validar elementos visibles en la página **Inputs**.
- [x] Validar interacción con botones como `Display Inputs`, `Clear Inputs`, `Login`, `Register`, `Retrieve password` y `Show Browser Information`.
- [x] Validar links de navegación como `Home`, `Contact` y `here`.
- [x] Validar redirecciones correctas en páginas como **Home** y **Contact**.
- [x] Validar títulos y textos esperados en páginas como **OTP Login** y **Dynamic Pagination Table**.
- [x] Ejecutar las pruebas usando **Playwright Test**.
- [x] Generar resultados de ejecución en carpetas como `playwright-report/` y `test-results/`.

---

## Estrategia de prueba (casos, datos, precondiciones)

### Precondiciones
- Tener instalado **Node.js**.
- Tener instalado **npm**.
- Tener configurado el proyecto con **Playwright**.
- Tener acceso a internet para consumir el sitio `https://practice.expandtesting.com`.
- Contar con las dependencias instaladas con `npm install`.

### Datos de prueba

| Tipo | Valor |
|------|-------|
| URL base | `https://practice.expandtesting.com` |
| Email de prueba | `example@email.com` |
| URL esperada Home | `https://practice.expandtesting.com` |
| URL esperada Contact | `https://practice.expandtesting.com/contact` |
| Texto esperado OTP | `OTP Login` |
| Texto esperado paginación | `Showing 4 to 6 of 10 entries` |

### Casos de prueba

| ID | Archivo | Caso de prueba | Resultado esperado |
|----|---------|----------------|-------------------|
| TC-01 | `example.spec.js` | Navegar a Inputs y hacer clic en `Display Inputs` | La página carga y el botón responde al clic |
| TC-02 | `inputs.spec.js` | Validar visibilidad de campos Number, Text, Password y Date | Los 4 campos son visibles |
| TC-03 | `inputs.spec.js` | Validar botón `Clear Inputs` | Los campos desplegados dejan de mostrarse |
| TC-04 | `inputs.spec.js` | Validar link `Home` | Redirecciona correctamente a Home |
| TC-05 | `login.spec.js` | Validar visibilidad del link `here` | El link es visible |
| TC-06 | `login.spec.js` | Validar visibilidad del campo `Username` | El campo es visible |
| TC-07 | `login.spec.js` | Validar clic en botón `Login` | El botón es visible y clickable |
| TC-08 | `forgot-password.spec.js` | Validar ingreso de email y clic en `Retrieve password` | Campo y botón visibles; ingreso y clic exitosos |
| TC-09 | `locators.spec.js` | Validar link `Contact` | Redirecciona correctamente a Contact |
| TC-10 | `my-browser.spec.js` | Validar visualización de Browser Information | La sección `#browser-info` es visible |
| TC-11 | `otp-login.spec.js` | Validar título `OTP Login` | El heading es visible |
| TC-12 | `register.spec.js` | Validar botón `Register` | El botón es visible y clickable |
| TC-13 | `dynamic-table.spec.js` | Validar columna `Network` | La columna se visualiza correctamente |
| TC-14 | `dynamic-pagination-table.spec.js` | Validar navegación a página 2 de la tabla | El botón `2` funciona correctamente |
| TC-15 | `dynamic-pagination-table.spec.js` | Validar mensaje de registros en página 2 | Se muestra `Showing 4 to 6 of 10 entries` |

---

### Ejecución (comandos o pasos)
```bash
npx playwright test
npx playwright test --headed
```

### Visualizacion del reporte HTML

```bash
npx playwright show-report



