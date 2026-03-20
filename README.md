# No Sugar Kids Website

Página web oficial de **No Sugar Kids**, diseñada para promocionar de forma interactiva y segura los videos y canciones infantiles de **Luni, Capibara y Cepillo**. 

El sitio cuenta con una interfaz moderna, limpia y altamente responsiva inspirada en plataformas de streaming como Netflix.

## Características Principales

- **Diseño Responsivo (Mobile First)**: Adaptación arquitectónica con recursos de imágenes específicos para celulares (`-mobile`) y dimensiones optimizadas de lectura.
- **Theming Dinámico**: Switcher integrado de Modo Claro / Oscuro usando variables nativas de CSS para una experiencia personalizada.
- **Reproductor de Video Modal**: Reproducción inmersiva de iframes de YouTube sin abandonar el ecosistema de la página.
- **SEO Ready**: Etiquetas OpenGraph, Twitter Cards y Meta Descriptions altamente optimizadas para indexación y compartición en WhatsApp, Facebook y Twitter.
- **Redes Sociales**: Barra inferior interactiva con animaciones colorizadas para derivar tráfico a YouTube, Instagram, TikTok y Spotify.
- **Rendimiento Excepcional**: Compilado súper rápido vía Vite y React.

## Stack Tecnológico

- **Librería UI**: React.js 19
- **Tooling**: Vite
- **Estilización**: CSS3 Puro (Vanilla CSS) utilizando variables globales para el esquema de colores.

## Uso y Desarrollo Local

Para correr o probar el proyecto en tu propia computadora:

```bash
# Instala las dependencias del proyecto
npm install

# Levanta el servidor local de desarrollo
npm run dev
```

*(El servidor abrirá tu proyecto típicamente en `http://localhost:5173`)*

---

## Guía de Despliegue en Producción (AWS Lightsail)

La aplicación web está diseñada para construirse y servirse de manera estática directamente desde el dominio raíz `nosugarkids.com` alojado en una instancia privada de AWS Lightsail.

### Pasos de Actualización en el Servidor (Comandos de Emergencia)

Cada vez que realices cambios en el código local y los subas a GitHub (`git push`), deberás sincronizar tu servidor de Lightsail con la rama principal. 

Ingresa a la terminal lograda por SSH de tu servidor Lightsail y ejecuta el siguiente bloque de comandos:

```bash
# Navegar al directorio de tu servidor web
cd /var/www/nosugarkids.com

# Descargar la última versión del código desde GitHub
git fetch --all

# Forzar al servidor a igualarse exactamente a la rama 'main' remota
git reset --hard origin/main

# Instalar cualquier dependencia de Node nueva (si existiese)
npm install

# Generar la compilación estática de producción (crea la carpeta /dist)
npm run build
```

📌 **Nota Técnica**: Tras correr `npm run build`, Vite depositará todos los archivos listos (HTML, JS, CSS y assets) dentro de la carpeta `/dist/`.Asegúrate de que tu servicio Nginx/Apache apunte su *Document Root* hacia esta carpeta de distribución.
