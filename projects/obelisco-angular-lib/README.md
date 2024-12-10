# Introducción

NgxObelisco es una libreria de Angular basado en el sistema de diseño Obelisco y en componentes para los productos digitales de la ciudad de Buenos Aires.

## Sistema de Diseño Obelisco

Es el sistema de diseño para productos digitales del Gobierno de la Ciudad de Buenos Aires; una guía de recursos y herramientas creada para los ciudadanos/as.

Obelisco busca brindar soluciones de diseño tanto a áreas internas como externas de Gobierno, poniendo el foco en la accesibilidad y los estándares de usabilidad para lograr una experiencia ideal para las personas usuarias.

## Cómo usar NgxObelisco

NgxObelisco se distribuye por medio del [paquete publicado en npm](https://www.npmjs.com/package/ngx-obelisco). Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

### Instalación

Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:

```bash
npm install obelisco-angular
```

### Requerimientos

**Node.js**: Se recomienda utilizar la versión ^18.X.X.

**Angular**: Este proyecto requiere Angular 17. Asegúrate de tener Angular 17.X.X instalado globalmente o especificado en tu proyecto.

> **Importante**  
> Revisá las [versiones y herramientas aceptadas](https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI) por la **Agencia de Seguridad Informática (ASI)** del Gobierno de la Ciudad antes de elegir una versión de estas dependencias.

## Integración y Configuración de Recursos

En lugar de mostrar cada importación individualmente, a continuación se presenta un ejemplo de cómo incluir todas las dependencias y recursos necesarios en un archivo HTML.

- Iconografía: Incluye enlaces a la librería de iconos Boxicons y Material Symbols Rounded, proporcionando una amplia gama de iconos para utilizar en la interfaz de usuario.
- Tipografías: Integra fuentes de Google como Nunito y Open Sans para mantener la coherencia visual y mejorar la legibilidad.
- JavaScript: Enlaces a jQuery y Bootstrap para proporcionar funcionalidad adicional y componentes interactivos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Importar Boxicons desde CDN -->
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

    <!-- Importar Material Symbols Rounded desde Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" rel="stylesheet" />

    <!-- Importar tipografías Nunito y Open Sans desde Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <!-- Contenido de tu aplicación -->

    <!-- Importar popper desde CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>

    <!-- Importar Bootstrap desde CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
  </body>
</html>
```

## Importar módulos

Además de importar componente por componente como por ejemplo:

```js
import { OButtonModule } from 'obelisco-angular/button';
import { OAlertModule } from "obelisco-angular/alert";
```

Ó Puedes usar este que trae todos los módulos:

```js
import { NgxObeliscoModule } from "obelisco-angular/ngx-obelisco";
```

## Mantenimiento y colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Canales Digitales, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede contribuir con alguna de estas acciones:

1. Pedir un caso de uso nuevo: Si estás trabajando con NgxObelisco y tenés un caso de uso que no está contemplado, o ninguno de los componentes que existen se adapta bien a la necesidad.
2. Reportar un error o mejora técnica: Si encontrás un error en alguno de los componentes o alguna mejora que impacte en la usabilidad, accesibilidad o rendimiento.
3. Aportar con código: Si pediste un caso nuevo o reportaste un error y querés colaborar con el código, explicá en el issue que vas a estar trabajando en eso.

Para más detalles, consultá nuestra guía [Contribuir con NgxObelisco](https://github.com/gcba/obelisco-angular/blob/main/CONTRIBUTING.md).
