# Quick Task - Automatizacoin de localizadores y acciones avanzadas para la pagina web testingyes usando Playwright

## Objetivo / Historia de usuario

### Objetivo
Demostrar el primer avance en automatización web con **Playwright**, documentando localizadores clave y automatizando acciones avanzadas de interacción sobre distintas páginas de práctica.

### Historia de usuario
Como **QA Automation Tester**,  
quiero identificar localizadores y automatizar flujos e interacciones avanzadas con Playwright,  
para fortalecer mis bases en automatización web y validar comportamientos reales de la interfaz.

---

## Criterios de aceptación

- [x] Crear un archivo `locators-compra.md` con exclusivamente los localizadores necesarios para completar un flujo de compra end-to-end en `http://www.testingyes.com/onlineshop/`.
- [x] Crear un archivo `shadow-iframe-popup.md` con los localizadores necesarios para interactuar con elementos dentro de **Shadow DOM**, **IFrame** y **PopUp**.
- [x] Crear un archivo de prueba por cada acción avanzada solicitada.
- [x] Crear casos de prueba para cada item.
- [x] Implementar pruebas automatizadas usando **Playwright**.
- [x] Ejecutar todos los casos de prueba.
- [x] Generar resultados de ejecución y evidencias cuando aplique.

---

## Estrategia de prueba (casos, datos, precondiciones)

### Precondiciones
- Tener instalado **Node.js**.
- Tener instalado **npm**.
- Tener configurado un proyecto con **Playwright**.
- Tener acceso a internet para abrir los sitios de práctica.
- Tener las dependencias instaladas con `npm install`.
- Tener instalados los navegadores de Playwright con `npx playwright install`.

### Datos de prueba

| Tipo | Valor |
|------|-------|
| Sitio compra | `http://www.testingyes.com/onlineshop/` |
| Shadow DOM | `https://bonigarcia.dev/selenium-webdriver-java/shadow-dom.html` |
| IFrame | `https://bonigarcia.dev/selenium-webdriver-java/iframes.html` |
| PopUp / Alert | `https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html` |
| Click forzado | `https://bonigarcia.dev/selenium-webdriver-java/get-user-media.html` |
| Mouse Over | `https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html` |
| Doble click / Click derecho / Select | `https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html` |
| Drag & Drop | `https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html` |
| Subir archivo | `https://bonigarcia.dev/selenium-webdriver-java/download.html` |
| Simular teclas | `https://bonigarcia.dev/selenium-webdriver-java/slow-calculator.html` |
| Scroll | `https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html` |
| Manejo de pestañas | `https://demo.automationtesting.in/Windows.html` |
| Iframe alternativo | `https://demo.automationtesting.in/Frames.html` |

### Casos de prueba

| ID | Archivo sugerido | Escenario | Resultado esperado |
|----|------------------|-----------|-------------------|
| TC-01 | `locators-compra.md` | Documentar localizadores del flujo de compra | Se listan solo los localizadores necesarios del flujo end-to-end |
| TC-02 | `shadow-iframe-popup.md` | Documentar localizadores para Shadow DOM | Se identifican localizadores necesarios del Shadow DOM |
| TC-03 | `shadow-iframe-popup.md` | Documentar localizadores para IFrame | Se identifican localizadores necesarios dentro del IFrame |
| TC-04 | `shadow-iframe-popup.md` | Documentar localizadores para PopUp | Se identifican localizadores necesarios para interactuar con diálogos o popups |
| TC-05 | `click-forzado.spec.js` | Ejecutar click forzado | El elemento recibe el click usando opción forzada |
| TC-06 | `mouse-over.spec.js` | Ejecutar mouse over | Se visualiza el comportamiento esperado al pasar el mouse |
| TC-07 | `double-right-select.spec.js` | Ejecutar doble click | La acción de doble click se realiza correctamente |
| TC-08 | `double-right-select.spec.js` | Ejecutar click derecho | Se despliega el comportamiento esperado del click contextual |
| TC-09 | `double-right-select.spec.js` | Seleccionar valor en dropdown | El valor del dropdown queda seleccionado |
| TC-10 | `drag-drop.spec.js` | Ejecutar drag and drop | El elemento origen se mueve al destino esperado |
| TC-11 | `upload-file.spec.js` | Subir archivo | El archivo es cargado correctamente |
| TC-12 | `keyboard.spec.js` | Simular teclas | La calculadora o campo recibe la secuencia de teclas esperada |
| TC-13 | `scroll.spec.js` | Ejecutar scroll | Se cargan o visualizan nuevos elementos al desplazarse |
| TC-14 | `popup-alert.spec.js` | Manejar popup o alert | El popup es detectado y gestionado correctamente |
| TC-15 | `tabs.spec.js` | Manejo de pestañas | La nueva pestaña se abre y puede ser validada |
| TC-16 | `iframe.spec.js` | Interactuar con iframe | Se logra cambiar de contexto e interactuar con el contenido |
| TC-17 | `all-tests` | Ejecutar toda la suite | Todas las pruebas se ejecutan desde Playwright |

---

## Ejecución (comandos o pasos)

```bash
npx playwright test
```
Ejecucion en modo visual:

```bash
npx playwright test --headed
```
Visualización del reporte HTML:
```bash
npx playwright show-report
```
