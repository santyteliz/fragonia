# Fragonia Panadería Artesanal — sitio web

Sitio estático (HTML + CSS + JavaScript, sin dependencias) para Fragonia Panadería Artesanal, Miramar, Buenos Aires.

## Cómo verlo

**Opción 1: abrir directo.** Doble clic en `index.html`. Se abre en el navegador sin instalar nada.

**Opción 2: servidor local** (recomendado para probar como si estuviera publicado). Requiere [Node.js](https://nodejs.org) 18 o superior:

```bash
npm start
```

Después abrir http://localhost:4321

## Configurar WhatsApp

Editar `js/config.js` y completar el número comercial real, sólo dígitos, en formato internacional:

```js
whatsapp: '549XXXXXXXXXX',
```

(54 = Argentina, 9 = celular, luego código de área sin 0 y número sin 15.)

Todos los botones de la web (header, portada, cada categoría, ubicación, cierre y footer) toman el número de ahí. En el mismo archivo se pueden cambiar los mensajes que llegan pre-escritos en cada consulta. Mientras el número quede vacío, WhatsApp se abre para que la persona elija el contacto.

## Estructura

```
index.html          Página completa (una sola página con secciones)
css/styles.css      Estilos, paleta y responsive (celular ≤ 640 px, tablet ≤ 1080 px)
js/config.js        Número de WhatsApp y mensajes
js/main.js          Menú móvil, header al hacer scroll, apariciones y enlaces de WhatsApp
assets/img/         Logo y fotografías (cada foto en 1400 px y versión -800 px)
server.mjs          Servidor local mínimo para `npm start`
```

## Reemplazar las fotografías

Las fotos actuales son **ilustrativas** (Unsplash, licencia libre). Para usar fotos propias de Fragonia, reemplazar los archivos de `assets/img/` manteniendo el mismo nombre, en dos tamaños: `nombre.jpg` (1400 px de ancho) y `nombre-800.jpg` (800 px). Cuando estén las fotos reales, borrar los avisos "Fotografías ilustrativas" en `index.html` (sección Instagram y footer).

## Publicar

Al ser estático, se puede subir tal cual a cualquier hosting (Netlify, Vercel, GitHub Pages, Hostinger, etc.): basta con subir la carpeta completa. `server.mjs` y `package.json` sólo se usan para verlo en local.
